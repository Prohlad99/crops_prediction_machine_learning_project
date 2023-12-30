import pickle

import numpy as np

from flask import Flask, jsonify, request
from gevent.pywsgi import WSGIServer
from flask_cors import CORS

# import model
model = pickle.load(open('model.pkl','rb'))
sc = pickle.load(open('standscaler.pkl','rb'))
ms = pickle.load(open('minmaxscaler.pkl','rb'))

# app initialization
app = Flask(__name__)
CORS(app)


# routing
@app.route("/")
def home():
    return "Hello World"

@app.route("/predict", methods=['POST'])
def predict():
    data = request.get_json()

    feature_list = [int(data['nitrogen']), int(data['phosphorus']), int(data['potassium']), float(data['temperature']), int(data['humidity']), int(data['ph']), int(data['rainfall'])]
    single_pred = np.array(feature_list).reshape(1, -1)
    scaled_features = ms.transform(single_pred)
    final_features = sc.transform(scaled_features)
    prediction = model.predict(final_features)

    crop_dict = {1: "rice", 2: "maize", 3: "jute", 4: "cotton", 5: "coconut", 6: "papaya", 7: "orange",
                 8: "apple", 9: "muskmelon", 10: "watermelon", 11: "grapes", 12: "mango", 13: "banana",
                 14: "pomegranate", 15: "lentil", 16: "blackgram", 17: "mungbean", 18: "mothbeans",
                 19: "pigeonpeas", 20: "kidneybeans", 21: "chickpea", 22: "coffee"}

    if prediction[0] in crop_dict:
        crop = crop_dict[prediction[0]]

        return jsonify({
            "found": True,
            "value": crop
        })
    else:
        return jsonify({
            "found": False,
            "value": ""
        })

if __name__ == "__main__":
    http_server = WSGIServer(('', 5000), app)
    http_server.serve_forever()
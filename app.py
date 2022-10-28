import pickle
from flask import Flask,render_template,request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")


model = pickle.load(open('model.pkl','rb'))

prediction = model.predict([[28,50,150,22,1,2,3,7,3,1,0,40,20,2,0,0,0,0]])

print(prediction)


if __name__=='__main__':
    app.run(debug=True)

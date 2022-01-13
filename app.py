from flask import (
    Flask , Blueprint, flash, g, redirect, render_template, request, jsonify, session, url_for
)

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')





# if __name__ == '__main__':
#     app.run(host='0.0.0.0')
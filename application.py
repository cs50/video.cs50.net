from flask import Flask, abort, make_response, redirect, render_template, request, send_from_directory, session, url_for
from flask_session import Session
from raven.contrib.flask import Sentry
from werkzeug.contrib.fixers import ProxyFix

# Application
app = Flask(__name__)

# Ensure templates are auto-reloaded
app.config["TEMPLATES_AUTO_RELOAD"] = True

# Monitoring
Sentry(app)

# Configure session to use filesystem (instead of signed cookies)
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

# ProxyFix
app.wsgi_app = ProxyFix(app.wsgi_app)  # http://stackoverflow.com/a/23504684/5156190


@app.route("/", methods=["GET"])
def index():
    return render_template("index.html")

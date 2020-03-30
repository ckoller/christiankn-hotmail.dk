from flask import Blueprint

module = Blueprint('api/alpha/', __name__)

from modules.api.alpha import routes
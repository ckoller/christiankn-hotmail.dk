from flask import Flask

from modules.api.alpha import module as alpha_blueprint
from modules.index.routes import mod as index_blueprint


def create_app():
    flask_app = Flask(__name__)
    flask_app.register_blueprint(index_blueprint, url_prefix='/')
    flask_app.register_blueprint(alpha_blueprint, url_prefix='/api/alpha')
    return flask_app


if __name__ == '__main__':
    app = create_app()
    app.run()

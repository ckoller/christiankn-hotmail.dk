from flask import Blueprint, render_template

mod = Blueprint(
    '/', __name__,
    template_folder = 'templates'
)


@mod.route('/', methods=['GET', 'POST'])
def home():
    return render_template("ingdex.html", token="Hello Flask+React")

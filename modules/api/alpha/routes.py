from modules.api.alpha import module

@module.route('/', methods=['GET', 'POST'])
def hello_world():
    return "Hello World!";
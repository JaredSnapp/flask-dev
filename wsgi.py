from app import createApp
from decouple import config

app = createApp()

if __name__ == '__main__':
    app.run(debug=config('DEBUG'), host='0.0.0.0', port=5000)

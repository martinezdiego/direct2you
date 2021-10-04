// http methods

const POST = (data) => {
    return {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
}

const GET = () => {
    return {
        method: 'GET'
    }
};

const PUT = (data) => {
    return {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
}

// api config

const apiUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://direct2you.herokuapp.com/'
    : 'http://localhost:5000';
    
const api = {
    login: async (data) => {
        try {
            const url = `${apiUrl}/api/usuarios/ingresar`;
            const response = await fetch(url, POST(data));
            return response;
        }
        catch (err) {
            throw new Error(err);
        }
    },
    logout: async () => {
        try {
            const url = `${apiUrl}/api/usuarios/salir`;
            const response = await fetch(url, GET());
            return response;
        }
        catch (err) {
            throw new Error(err);
        }
    }
};

export default api;

import jwt from 'jsonwebtoken';
import r from 'rethinkdb';
import DbService from './DBService';

/**
 * Class for handling JSON Web Token (JWT) authentication.
 */
class JsonWebTokenAuth { 
    private_key = "une_string_au_pif";
    db = new DbService().connect();

    async jwtVerify(token: string) {
        let decrypt_token;
        let res = {};

        try {
            decrypt_token = jwt.verify(token, this.private_key);
        } catch (error: Error | any) {
            res = {"error": error.message};
            return res;
        }

        try {
            const user = await r.table('user').get(decrypt_token.sub).without('password').run(this.db.conn);
            if (!user) {
                res.error = "L'utilisateur n'existe pas.";
                return res;
            }

            res.sub = user;
            return res;
        } catch (error) {
            res.error = "Erreur de connexion à la base de données";
            return res;
        }
    }

    /**
     * Sign a payload to create a JWT token.
     * @param {Object} payload - The payload to sign.
     * @param {Object} options - The options for signing the token.
     * @returns {string} The signed JWT token.
     */
    jwtSign(payload, options) {
        return jwt.sign(payload, this.private_key, options);
    }
}

export { JsonWebTokenAuth };
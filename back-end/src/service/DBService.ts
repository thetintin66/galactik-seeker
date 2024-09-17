import r, { Connection } from 'rethinkdb';

class DbService {
    db_name = 'galactik-seeker';
    tables = ['user', 'report'];
    user = 'fr33zingH3ll';
    password = 'ziJY2jq6329MBu';
    conn: Connection | null = null

    async connect() {
        try {
            this.conn = await r.connect({ host: 'localhost', port: 28015, db: this.db_name});
            console.log('Connexion réussie à RethinkDB');
        } catch (error) {
            console.error('Erreur lors de la connexion à RethinkDB:', error);
            throw error;
        }
    }
}

export default DbService;
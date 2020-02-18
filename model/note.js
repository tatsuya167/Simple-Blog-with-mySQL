const con = require('../util/database')

class Note {
    constructor(handleName,comment) {
        this.handleName = handleName;
        this.comment = comment;
    }

    saveNote() {
        let column = "HandleName";
        let column2 = "Topic";
        const sql = `INSERT INTO postNoteTable (${column}, ${column2}) VALUES ('${this.handleName}', '${this.comment}')`

        con.query(sql, (err, rows) => {
            if(err) throw err;
            console.log('1 record inserted!!')
        })
    }

    static getAll(callback) {
        const sql = "SELECT * FROM postNoteTable";
        con.query(sql, callback)
    }

    static updateNote(id, author, topic) {
        const sql = `UPDATE postNoteTable SET HandleName = '${author}', Topic = '${topic}' WHERE ID = ${id}`;
        con.query(sql, err => {
            if(err) throw err;
            console.log('1 record updated!!')
        })
    }

    static deleteNote(id) {
        const sql = `DELETE FROM postNoteTable WHERE ID = ${id}`
        con.query(sql, err => {
            if(err) throw err;
        })

    }

}

module.exports = Note;
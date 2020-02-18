const Note = require('../model/note')

exports.getTopPage = (req, res, next) => {
    res.render('home')
}

exports.createNote = (req, res, next) => {
    res.render('writeform')
}

exports.postNote = (req, res, next) => {
    console.log('here')
    const note = new Note(req.body.handleName, req.body.topic);
    note.saveNote();
    console.log('posted!!')
    res.redirect('/read')
}

exports.detailNote = (req, res, next) => {
    const noteId = req.params.noteId;
    Note.getAll((err, rows) => {
        if(err) throw err;
        const isEditing = req.query.edit;
        const note = rows.find(nt => nt.ID == noteId)
        res.render('detail', {note: note, editMode: isEditing})
    });
}

exports.readNote = (req, res, next) => {
    Note.getAll((err, rows) => {
        if(err) throw err;
        let notes = rows;
        res.render('read', {notes: notes})
    });
}

exports.updateNote = (req, res, next) => {
    const noteId = req.body.noteId
    const author = req.body.handleName
    const topic = req.body.topic
    Note.updateNote(noteId, author, topic)
    res.redirect('/notes/' + noteId)
}

exports.deleteNote = (req, res, next) => {
    const id = req.body.deleId
    // confirmDel(Note.deleteNote(id))

    res.redirect('/read')
}
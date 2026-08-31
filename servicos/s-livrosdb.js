class LivroService {
  constructor(db) {
    this.db = db;
  }

  getTodosLivros() {
    const buscaTodos = this.db.prepare("SELECT * FROM livros").all();
    return buscaTodos;
  }

  getLivroPorId(id) {
    const buscaPorId = this.db
      .prepare("SELECT * FROM livros WHERE id == ?")
      .get(id);
    return buscaPorId;
  }

  insereLivro(body) {
    const insere = this.db.prepare("INSERT INTO livros (name) VALUES (@name)");
    const resultado = insere.run(body);
    return { id: resultado.lastInsertRowid, ...body };
  }

  modificaLivro(body, id) {
    const atualiza = this.db.prepare(
      "UPDATE livros SET name = @name WHERE id == @id",
    );
    const resultado = atualiza.run({ ...body, id });
    return { id, ...body };
  }

  excluirLivro(id) {
    const deletaPorId = this.db.prepare("DELETE FROM livros WHERE id == ?");
    const reslultado = deletaPorId.run(id);
    return reslultado;
  }
}

module.exports = LivroService;
// const row = db.prepare('SELECT * FROM users WHERE id = ?').get(1);
// console.log(row.firstName, row.lastName, row.email);

// const stmt = db.prepare('INSERT INTO cats (name, age) VALUES (?, ?)');
// const info = stmt.run('Joey', 2);

// console.log(info.changes); // => 1

// const stmt = db.prepare('INSERT INTO people VALUES (@firstName, :lastName, $age)');

// stmt.run({
//   firstName: 'John',
//   lastName: 'Smith',
//   age: 45
// });

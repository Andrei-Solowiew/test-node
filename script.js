const express = require('express')
const app = express()
const ejs = require('ejs')
const pool = require('./db') // Подключаемся к базе данных

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
	pool.query('SELECT * FROM "Themes"', (err, result) => {
		if (err) {
			console.error('Ошибка выполнения запроса:', err)
			res
				.status(500)
				.send('Произошла ошибка при получении данных из базы данных')
			return
		}
		const themes = result.rows
		res.render('index', { themes: themes })
	})
})

// Устанавливаем движок шаблонов EJS
app.set('view engine', 'ejs')

// Маршрут для обработки запроса к index.ejs
app.get('/', (req, res) => {
	res.render('index')
})

// Маршрут для обработки запроса к theory.ejs
app.get('/theory2', (req, res) => {
	res.render('theory2')
})

app.get('/Z1', (req, res) => {
	pool.query('SELECT * FROM "Tasks" WHERE "Id_theme" = 2', (err, result) => {
		if (err) {
			console.error('Ошибка выполнения запроса:', err)
			res
				.status(500)
				.send('Произошла ошибка при получении данных из базы данных')
			return
		}
		const tasks = result.rows
		res.render('Z1', { tasks: tasks })
	})
})
app.get('/Z2', (req, res) => {
	pool.query('SELECT * FROM "Tasks" WHERE "Id_theme" = 2', (err, result) => {
		if (err) {
			console.error('Ошибка выполнения запроса:', err)
			res
				.status(500)
				.send('Произошла ошибка при получении данных из базы данных')
			return
		}
		const tasks = result.rows
		res.render('Z2', { tasks: tasks })
	})
})
app.get('/Z3', (req, res) => {
	pool.query('SELECT * FROM "Tasks" WHERE "Id_theme" = 2', (err, result) => {
		if (err) {
			console.error('Ошибка выполнения запроса:', err)
			res
				.status(500)
				.send('Произошла ошибка при получении данных из базы данных')
			return
		}
		const tasks = result.rows
		res.render('Z3', { tasks: tasks })
	})
})
app.get('/Z4', (req, res) => {
	pool.query('SELECT * FROM "Tasks" WHERE "Id_theme" = 2', (err, result) => {
		if (err) {
			console.error('Ошибка выполнения запроса:', err)
			res
				.status(500)
				.send('Произошла ошибка при получении данных из базы данных')
			return
		}
		const tasks = result.rows
		res.render('Z4', { tasks: tasks })
	})
})
app.get('/Z5', (req, res) => {
	pool.query('SELECT * FROM "Tasks" WHERE "Id_theme" = 2', (err, result) => {
		if (err) {
			console.error('Ошибка выполнения запроса:', err)
			res
				.status(500)
				.send('Произошла ошибка при получении данных из базы данных')
			return
		}
		const tasks = result.rows
		res.render('Z5', { tasks: tasks })
	})
})
app.get('/Z6', (req, res) => {
	pool.query('SELECT * FROM "Tasks" WHERE "Id_theme" = 2', (err, result) => {
		if (err) {
			console.error('Ошибка выполнения запроса:', err)
			res
				.status(500)
				.send('Произошла ошибка при получении данных из базы данных')
			return
		}
		const tasks = result.rows
		res.render('Z6', { tasks: tasks })
	})
})
app.get('/Z7', (req, res) => {
	pool.query('SELECT * FROM "Tasks" WHERE "Id_theme" = 2', (err, result) => {
		if (err) {
			console.error('Ошибка выполнения запроса:', err)
			res
				.status(500)
				.send('Произошла ошибка при получении данных из базы данных')
			return
		}
		const tasks = result.rows
		res.render('Z7', { tasks: tasks })
	})
})
app.get('/Z8', (req, res) => {
	pool.query('SELECT * FROM "Tasks" WHERE "Id_theme" = 2', (err, result) => {
		if (err) {
			console.error('Ошибка выполнения запроса:', err)
			res
				.status(500)
				.send('Произошла ошибка при получении данных из базы данных')
			return
		}
		const tasks = result.rows
		res.render('Z8', { tasks: tasks })
	})
})
app.get('/Z9', (req, res) => {
	pool.query('SELECT * FROM "Tasks" WHERE "Id_theme" = 2', (err, result) => {
		if (err) {
			console.error('Ошибка выполнения запроса:', err)
			res
				.status(500)
				.send('Произошла ошибка при получении данных из базы данных')
			return
		}
		const tasks = result.rows
		res.render('Z9', { tasks: tasks })
	})
})
app.get('/Z10', (req, res) => {
	pool.query('SELECT * FROM "Tasks" WHERE "Id_theme" = 2', (err, result) => {
		if (err) {
			console.error('Ошибка выполнения запроса:', err)
			res
				.status(500)
				.send('Произошла ошибка при получении данных из базы данных')
			return
		}
		const tasks = result.rows
		res.render('Z10', { tasks: tasks })
	})
})
app.get('/Z11', (req, res) => {
	pool.query('SELECT * FROM "Tasks" WHERE "Id_theme" = 2', (err, result) => {
		if (err) {
			console.error('Ошибка выполнения запроса:', err)
			res
				.status(500)
				.send('Произошла ошибка при получении данных из базы данных')
			return
		}
		const tasks = result.rows
		res.render('Z11', { tasks: tasks })
	})
})
app.get('/Z12', (req, res) => {
	pool.query('SELECT * FROM "Tasks" WHERE "Id_theme" = 2', (err, result) => {
		if (err) {
			console.error('Ошибка выполнения запроса:', err)
			res
				.status(500)
				.send('Произошла ошибка при получении данных из базы данных')
			return
		}
		const tasks = result.rows
		res.render('Z12', { tasks: tasks })
	})
})
app.get('/Z13', (req, res) => {
	pool.query('SELECT * FROM "Tasks" WHERE "Id_theme" = 2', (err, result) => {
		if (err) {
			console.error('Ошибка выполнения запроса:', err)
			res
				.status(500)
				.send('Произошла ошибка при получении данных из базы данных')
			return
		}
		const tasks = result.rows
		res.render('Z13', { tasks: tasks })
	})
})

app.get('/theory-empty', (req, res) => {
	res.render('theory-empty')
})

app.listen(3000, () => {
	console.log('Сервер запущен на порту 3000')
})

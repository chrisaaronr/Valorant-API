# Working with Express and Own API  

This project involves developing a web application using Express framework and building a custom API to handle data processing and communication.

**Link to project:** [here]([http://recruiters-love-seeing-live-demos.com/](https://valorant-api-100devs.onrender.com))

## How It's Made:

**Tech used:** HTML, JavaScript, Node.js, & Express, Render


Serving Up JSON:
```javascript
app.get('/api', (request, response) => {
  response.json(valorant)
});
```

to 

```javascript
app.get('/api/:name', (request, response) => {
	const valorantName = request.params.name.toLowerCase();
	// console.log(valorant[valorantName])
	
	if (valorant[valorantName]) {
		response.json(valorant[valorantName])
	}else{
		response.json(valorant['unknown'])
	};
})
```

When pushed to Render:
```javascript
app.listen(process.env.PORT || PORT, () => {
	console.log(`The server is running on port ${PORT}.`)
});
```

## Optimizations

This Web Application is only utilizing `app.get('/', (req, res) => {}`.  Further optimization will be to include further concepts of CRUD.

## Lessons Learned:
- Dependencies
- .gitignore
- CORS
- `app.get('/')`
- `app.listen(PORT => ) {}`
- Serving `json`

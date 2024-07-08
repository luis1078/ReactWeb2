const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/data_test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const taskSchema = new mongoose.Schema({
  text: String,
  finished: Boolean,
});

const Task = mongoose.model('Task', taskSchema);

app.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post('/tasks', async (req, res) => {
  const newTask = new Task(req.body);
  try {
    await newTask.save();
    res.status(201).send(newTask);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.delete('/tasks/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.status(200).send('Task deleted');
  } catch (error) {
    res.status(500).send(error);
  }
});

app.put('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    task.finished = !task.finished;
    await task.save();
    res.status(200).send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

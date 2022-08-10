import express from 'express';

const app = express();
app.use(express.json());

const port = 7000;

app.get("/", (req, res) => {
    res.send({ nama: "Rizki Nazami"});
});

app.get("/makanan", (req, res) => {
    res.send([
        {
            id: "1",
            nama: "Mie Goreng",
            rasa: "Bawang"
        },
        {
            id: "2",
            nama: "Pare",
            rasa: "Pahit"
        },
        {
            id: "3",
            nama: "Nasi Padang",
            rasa: "Pedas"
        }
    ]);
});

app.get("/minuman", (req, res) => {
    res.send([
        {
            id: "1",
            nama: "Kopi",
            rasa: "Pahit"
        },
        {
            id: "2",
            nama: "Teh",
            rasa: "Tawar"
        },
        {
            id: "3",
            nama: "Susu",
            rasa: "Manis"
        }
    ]);
});

app.post("/create", (req, res) => {
    res.send({ nama: req.body});
});

app.listen(port, () => {
    console.log(`Aplikasi nya jalan di port ${port}`);
});5
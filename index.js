const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const cors = require('cors');

const app = express();
app.use(cors());

// Tus datos de Supabase que ya tenemos
const supabase = createClient(
    'https://vemsblyxfsxewklxtgzc.supabase.co', 
    'sb_publishable_2T-mfSvNBY_9oE9530Z52A_Ri36_v6P' 
);

// Este es el endpoint (el API) que el profe quiere ver
app.get('/alumnos', async (req, res) => {
    const { data, error } = await supabase.from('paec').select('*');
    if (error) return res.status(500).json(error);
    res.json(data);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Servidor API activo en puerto ' + PORT));

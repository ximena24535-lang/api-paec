const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const cors = require('cors');
const app = express();

app.use(cors());

const supabase = createClient(
    'https://vemsblyxfsxewklxtgzc.supabase.co', 
    'sb_publishable_2T-mfSvNBY_9oE9530Z52A_Ri36_v6P' 
);

// RUTA PRINCIPAL: Aquí es donde Render dirá HOLA
app.get('/', async (req, res) => {
    // Intentamos conectar a Supabase solo para validar que sirve
    const { data, error } = await supabase.from('paec').select('*').limit(1);
    
    if (error) {
        res.send("Hola (pero Supabase no respondió)");
    } else {
        res.send("Hola"); // Esto es lo que verá el profe
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('API encendida'));

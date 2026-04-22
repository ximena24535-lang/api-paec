const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const cors = require('cors');
const app = express();

app.use(cors());

const supabase = createClient(
    'https://vemsblyxfsxewklxtgzc.supabase.co', 
    'sb_publishable_2T-mfSvNBY_9oE9530Z52A_Ri36_v6P' 
);

app.get('/', async (req, res) => {
    // Intentamos una consulta súper simple a la tabla paec
    const { data, error } = await supabase.from('paec').select('count', { count: 'exact', head: true });
    
    if (error) {
        // Si sale este mensaje, el nombre de la tabla o la llave están mal
        res.send("Error: No se pudo conectar con Supabase. Revisa el nombre de la tabla.");
    } else {
        // SI TODO ESTÁ BIEN CONECTADO, DIRÁ HOLA
        res.send("Hola");
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('API lista'));

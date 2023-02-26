const sharp = require('sharp');

sharp('image-filter.png').resize(200, 500).grayscale().toFile('resized.png');
//realiza la transformacion de nuestra imagen con cualquier parametro
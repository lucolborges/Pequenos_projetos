const chars = '0123456789ABCDEF';
let color;


const generatecolors = () => {
  for(let i = 0; i < 6; i++){
    color += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  
  return color;
};

document.getElementById('btb-action').addEventListener('click', () => {
  
  for(let i = 0; i < 5; i++) {
    let div_color = document.getElementById(`color-${i+1}`);
    div_color.style.backgroundColor = generatecolors();

    let txtColor = document.getElementById(`txt-color${i+1}`);
    txtColor.textContent = color;
    color = '#'
  }

})

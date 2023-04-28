fetch('links.json')
  .then(response => response.json())
  .then(data => {
    const linkParent = document.querySelector('.links');
        data.forEach(link => {
       const div = document.createElement('div');
       div.classList.add('link-wrapper');
       div.innerHTML = '<a href="' + link.url + '" class="link-wrapper__body">' +
            '<div class="link-wrapper__content flex">' +
                '<div class="link-wrapper__icon">' + 
                    '<i class="' + link.icon + '"></i>' +
                '</div>' +
                '<div class="link-wrapper__text">' +
                    link.name +
                '</div>' +
            ' </div>' 
        +'</a>';
        linkParent.appendChild(div);
    });
  })
  .catch(error => console.error(error));    


                
                    
                   
             
         
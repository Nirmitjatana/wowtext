function wowtext(options){
    if (options.type === 'alpha'){
        options.type = '2px';
    }
    else if(options.type === 'beta'){
        options.type = '4px'
    }
    else if(options.type === 'gamma'){
        options.type = '6px'
    }
    else{
        options.type = '6px'
    }
    if (!options.color){
        options.color = 'grey'
    }
    let texts = document.querySelectorAll('.wowtext');
        // texts.forEach.style.textShadow = `2px 2px 2px black`;
        texts.forEach(single => {
                single.style.textShadow = `3px 3px ${options.type} ${options.color}`;
            })
}
module.exports.wowtext = wowtext;

// test code
// wowtext({
//     type: 'alpha',
//     color: 'green'
// });
window.addEventListener('DOMContentLoaded', function() { 
    function toggleOpen(){
        if(!this.classList.contains('open')){
            removeClasses();
            this.classList.add('open');
            return;
        } 
        removeClasses();
    }
    
    function toggleActice(event) {
        if(event.propertyName.includes('flex')) {
            if(this.classList.contains('open')){
                this.classList.toggle('open-active');
            }
        }
    }
    
    function removeClasses() {
        document.querySelectorAll('.panel').forEach( panel => { 
            panel.classList.remove('open', 'open-active');
        });
    }

    const panels = document.querySelectorAll('.panel');
    
    panels.forEach(panel => {
        panel.addEventListener('click', toggleOpen)
        panel.addEventListener('transitionend', toggleActice)
    });
});
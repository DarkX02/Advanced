function lockedProfile() {
    let profiles = document.querySelectorAll('.profile')

    for (const profile of profiles) {
        profile.addEventListener('click', show)
    }

    function show(ev) {
        let curProfile = ev.currentTarget
        let radioLocked = curProfile.querySelector('input[value=lock]').checked
        if (ev.target.tagName == 'BUTTON') {
            if (!radioLocked) {
                if (ev.target.textContent == 'Show more') {
                    curProfile.querySelector('div').style.display = 'inline'
                    ev.target.textContent = 'Hide it'
                }else{
                    curProfile.querySelector('div').style.display = 'none'
                    ev.target.textContent = 'Show more'
                }
            }
        }
    }
}
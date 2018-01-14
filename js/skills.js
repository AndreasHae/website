window.onload = () => {
    const tableWrapper = document.getElementById('skills-table-wrapper')

    fetch('skills.json')
        .then(response => response.json())
        .then(skills => tableWrapper.appendChild(skillTable(skills)))
}

function skillTable(skills) {
    const table = element('table')

    Object.keys(skills).forEach(category => {
        table.appendChild(categoryHeader(category))
        table.appendChild(categoryBody(skills[category]))
    })

    return table
}

function categoryHeader(category) {
    const cell = (content) => element('th', content)

    const header = element('thead')
    const row = element('tr')

    row.appendChild(cell(category))
    row.appendChild(cell())
    row.appendChild(cell())

    header.appendChild(row)

    return header
}

function categoryBody(skillsInCategory) {
    const cell = (content) => element('td', content)

    const body = element('tbody')

    skillsInCategory.forEach(skill => {
        const row = element('tr')

        row.appendChild(cell(skill.name))
        row.appendChild(cell(skill.note))
        row.appendChild(starCell(skill.stars))

        body.appendChild(row)
    })

    return body
}

function starCell(starCount) {
    const elementWithClass = (type, content, cssClass) => {
        const el = element(type, content)
        el.classList.add(cssClass)
        return el
    }

    const icon = (iconName) => elementWithClass('i', iconName, 'material-icons')

    const fullStar = () => icon('star')
    const halfStar = () => icon('star_half')
    const emptyStar = () => icon('star_border')

    const cell = element('td')

    for (let i = 0; i < 5; i++) {
        if (starCount <= 0) {
            cell.appendChild(emptyStar())
        } else if (starCount == 0.5) {
            cell.appendChild(halfStar())
        } else {
            cell.appendChild(fullStar())
        }

        starCount--;
    }

    return cell
}

function element(elementType, content) {
    if (content == undefined || content == null) {
        return document.createElement(elementType)
    }

    const element = document.createElement(elementType)
    element.innerHTML = content
    return element
}
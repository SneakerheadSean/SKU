## SKU

Deployed Site (TBD)

## Description

An application that can be used to keep track of sneakers and show off pictures of them as well.

## API and Data Sample


## Wireframes

![wireframe](https://whimsical.com/the-collection-HtbDfNPCDtjbmHBEGMdsU3)
![Component Hierarchy](https://whimsical.com/component-hierarchy-DnPFtKDH5zENncjfmUHCh6)

#### MVP 

- 6 Components: Header, Footer, Navigation, Form, Modal, Gallery
- Use Axios to GET, POST, UPDATE, AND DELETE from Airtable.
- Render the data to the browser


#### PostMVP  

- User can geo-code the sneakers by location where it was purchased and then see other sneakers in their collection that was also purchased there.
- Sneaker data entered by the user is ran against StockX and Goat to see current resell value.

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|August 20| Prompt / Wireframes and Hierarchy / Timeframes / Project Approval | Incomplete
|August 21| Core Application Structure | Incomplete
|August 22| Pseudocode / actual code | Incomplete
|August 23 - 24| Coding / Intial Clickable Model / MVP | Incomplete
|August 25 - 26| Styling with CSS Grid (Responsive Design) | Incomplete
|August 27| Presentation | Incomplete


## Timeframes

Below are the timeframes corresponding to each area of development. 

H - High Priority | 
S - Significant Priority (Next in line)

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| HTML/CSS/JS Structure | H | 1.5hrs| 3hrs | 3hrs |
| Working with API | H | 4hrs| 2hrs | 2.5hrs |
| Working with 2nd API | H | 4hrs| 5hrs | 6hrs |
| CSS Styling | H | 5hrs| 4hrs | 6hrs |
| Post MVP | S | 3hrs| -hrs | -hrs |
| Total | H | 17.5hrs| 14hrs | 17.5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

``` javascript

function showData(players, idArray) {
  results.innerHTML = ""

  const currentPlayer = idArray.find((player) => {
    return player.firstName === players[0].first_name && player.lastName === players[0].last_name
  })
  const playerImage = `http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${currentPlayer.personId}.png`
  
  players.forEach(player => {
    
    let playerData = `
    <h1 id="player-name">${player.first_name} ${player.last_name}</h1>
    <h4>Team:</h4>
    <h2>${player.team.full_name}</h2>
    <img src="${playerImage}"/>
    `
    results.insertAdjacentHTML('beforeend', playerData)
  });

}

```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.
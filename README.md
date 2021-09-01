## SKU

https://sku-app.netlify.app/

## Description

An application that can be used to keep track of sneakers and show off pictures of them as well.

## API and Data Sample



{
    "records": 
        {
            "id": "recgiI21mdQoi9Y5U",
            "fields": {
                "name": "Air Jordan Retro 1 \"Shadow 2.0\"",
                "images": "https://dl.airtable.com/.attachments/da222716b9fae02f81b8583b08eef328/db706556/CTS04897.JPG",
                "sku": "555088-035"
            },
            "createdTime": "2021-08-19T16:03:04.000Z"
        },
        {
        }


## Wireframes

[Wireframe](https://whimsical.com/the-collection-HtbDfNPCDtjbmHBEGMdsU3)

## Component Hierarchy

[Component Hierarchy](https://whimsical.com/f5ce8059-59d1-4be5-8d98-71bed6a9e091)

#### MVP 

- Leverage Axios commands to GET, POST, and DELETE data from external API
- Render data from external API to the browser via React Components



#### PostMVP  

- User can geo-code the sneakers by location where it was purchased and then see other sneakers in their collection that was also purchased.
- Sneaker data entered by the user is ran against StockX and Goat to see current resell value.
- User can search their collection.

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|August 20| Prompt / Wireframes and Hierarchy / Timeframes | Complete
|August 21| Core Application Structure | Complete
|August 22| Pseudocode / actual code | Complete
|August 23 - 24| Coding / Initial Clickable Model / MVP | Complete
|August 25 - 26| Styling with CSS (Responsive Design) / Deployment | Complete
|August 27| Deliver to Client | Complete


## Timeframes

Below are the timeframes corresponding to each area of development. 

H - High Priority | 
S - Significant Priority (Next in line)

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Core Application Structure | H | 6hrs| 6hrs | 8hrs |
| Working with API | H | 5hrs| 4hrs | 8hrs |
| Research and Development | H | 5hrs| 9hrs | 10hrs |
| CSS Styling | H | 8hrs| 14hrs | 21hrs |
| Post MVP | S | 3hrs| -hrs | -hrs |
| Total | H | 35hrs| 42hrs | 47hrs |


## SWOT Analysis

Strengths: Learning Ability and willingness to understand new concepts
Weaknessess: Attempting to achieve perfection
Opportunities: Diving deeper into React and documentation
Threats: 

## Code Snippet

Accomplishing the task of rendering the images from the API to the browser via Cards and then having a modal appear once clicked. The code for this functionality is below.
```
<Route path="/" exact>
          {sneakers.map((sneaker, index) => (
            
            <CardGroup className="card">
              <Card>
                <img
                  className="sneaker-pics"
                  onClick={() => {
                    setId(sneaker.id);
                    setModalShow(true);
                  }}
                  src={sneaker.fields.images}
                  alt={sneaker.fields.name}
                />
              </Card>
            </CardGroup>
            
          ))}
          <Sneaker
            show={modalShow}
            id={id}
                        onHide={() => setModalShow(false)}
            sneakers={sneakers}
            setToggleFetch={setToggleFetch}
          />
        </Route>
```

import yelp, { client } from 'yelp-fusion'

const token = 'gdrsso4F906v3Ruga2nslfMGe20d0A7cRqarZ_qNcrnv_2nsEIKcnAQ0cXb_uv4xR_l23yCJzwEIibr4_LXGVNvC8NFuMRtHeKZ-0L1nTkm2ArgEuLn2PCKq65Z7WXYx'
const yelpClient = client(token)

const yelpController = {}

yelpController.postSearch = (req, res) => {
  yelpClient.search({
    term: req.body.term,
    location: req.body.location,
    limit: 20
  }).then(response => {
    console.log(response)

    res.json({
      yelp: response.jsonBody.businesses
    })
  })
}

export default yelpController

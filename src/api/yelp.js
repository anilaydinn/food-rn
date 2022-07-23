import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 4QPs9Zjm0dB51kDrNUKLUy4bZNCoujQD-bmaNJuJrukgGtrmrtWdjB0cMJRnFam-pl9W6fpK6zJgUj6kBuW7upa393vKUmhBnPrUsxo30PrbN6P0kHw_fxDNcY7bYnYx",
  },
});

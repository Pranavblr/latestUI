const axios = require("axios");

const requestHandler = async (type, url, data, config)  =>  {
      try {
        if (type === "GET") {
        let res = await axios
            .get(url, config)
        return res;
        }

        if (type === "POST") {
            let res = await axios
            .post(url, data, config)
        return res
        }

        return ([null, "Request type does not match GET or POST"]);
      } catch (e) {
        console.log(
          "    Error: Request Hanlder resulted in Errors while sending the request."
        );
        throw e;
      }
}

export default requestHandler
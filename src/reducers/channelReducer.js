/* import {
  FETCH_NETWORK_DATA,
  FETCH_NETWORK_DATA_SUCCESS,
  FETCH_NETWORK_DATA_FAIL
} from "../constants/actiontypes";

const INITIAL_STATE = {
  dataloadInProgress: false,
  data: null,
  error: null
};

export default (state = INITIAL_STATE, action) => {
  const testdata = {
    network: [
      {
        name: "dev",
        channels: [
          {
            name: "gdt-channel",
            orgs: [
              {
                participantid: "org1"
              },
              {
                participantid: "org2"
              },
              {
                participantid: "org3"
              }
            ]
          }
        ]
      },
      {
        name: "qa",
        channels: [
          {
            name: "gdt-channel",
            orgs: [
              {
                participantid: "org4"
              },
              {
                participantid: "org5"
              },
              {
                participantid: "org6"
              }
            ]
          }
        ]
      }
    ]
  };

  switch (action.type) {
    case FETCH_NETWORK_DATA:
      console.log("FETCH_NETWORK_DATA");
      return { ...INITIAL_STATE, dataloadInProgress: true };

    case FETCH_NETWORK_DATA_SUCCESS:
      console.log("FETCH_NETWORK_DATA_SUCCESS");

      return { ...INITIAL_STATE, data: action.payload };

    case FETCH_NETWORK_DATA_FAIL:
      console.log("FETCH_NETWORK_DATA_FAIL");
      return { ...INITIAL_STATE, error: action.payload };

    default:
      return state;
  }
};
 */

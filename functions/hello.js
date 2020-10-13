let voteArr = [0, 0, 0, 0];
exports.handler = async event => {
  const val = event.queryStringParameters.vote;
  switch (val) {
    case "a":
      voteArr[0]++;
      break;
    case "b":
      voteArr[1]++;
      break;
    case "c":
      voteArr[2]++;
      break;
    case "d":
      voteArr[3]++;
      break;
    case "r":
      voteArr = [0, 0, 0, 0];
      break;
    default:
      return voteArr;
  }
  return {
    statusCode: 200,
    headers: { "Access-Control-Allow-Origin": "*" },
    body: JSON.parse(voteArr),
  };
};

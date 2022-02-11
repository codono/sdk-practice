import path from 'path';

const sendSuccess = (req, res, data) => {
  if (!res) {
    return console.error(
      '[Warning!] undefined RES. skipping helper.sendSuccess...',
    );
  }
  res.writeHead(200, { 'Content-Type': 'application/json;charset=UTF-8' });
  const output = { data };
  res.end(`${JSON.stringify(output)}\n`);
};

const sendFailure = (req, res, err) => {
  if (!res) {
    return console.error(
      '[Warning!] undefined RES. skipping helper.sendFailure...',
    );
  }

  const { error, message, status } = err;

  res.writeHead(status || 400, {
    'Content-Type': 'application/json;charset=UTF-8',
  });
  const output = { error, message, status };
  res.end(`${JSON.stringify(output)}\n`);
};

const missingData = (data) => {
  return {
    error: 'missingData',
    message: `You must include ${data}`,
  };
};

const notLoggedIn = () => {
  return {
    error: 'notLoggedIn',
    message: 'This user is not logged in!',
  };
};

const noSuchRow = (data) => {
  return {
    error: 'noSuchRow',
    message: `No ${data}`,
  };
};

const isImage = (filename) => {
  switch (path.extname(filename).toLowerCase()) {
    case '.jpg':
    case '.jpeg':
    case '.png':
    case '.bmp':
    case '.gif':
    case '.tif':
    case '.tiff':
      return true;
  }

  return false;
};

export default {
  sendSuccess,
  sendFailure,
  missingData,
  notLoggedIn,
  noSuchRow,
  isImage,
};

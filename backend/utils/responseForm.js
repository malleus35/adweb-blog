module.exports = {
  successTrue: (status, data) => {
    return { success: true, status: status, data: data };
  },
  successFalse: status => {
    return { success: false, status: status };
  }
};

import Api from "Api";

const apiMiddleware = () => {
  return (next) => (action) => {
    const { type, actions = {}, promise, ...rest } = action;

    if (type !== Api.API_CALL) {
      return next(action);
    }

    const { success, fail } = actions;

    return promise
      .then((payload) => {
        if (success && success.type) {
          const headers = payload?.headers;
          Api.liveUpdate();
          return next({ ...rest, payload: payload?.data, headers, ...success });
        }
      })
      .catch((error) => {
        console.log(error.message);
        const response = error?.response;
        // const errors = response?.data?.errors;

        // if (errors && typeof errors === "object" && !Array.isArray(errors)) {
        //   response.data.errors = errors?.full_messages || [];
        // }

        if (fail && fail.type) {
          return next({
            ...rest,
            ...response,
            error,
            ...fail,
          });
        }
      });
  };
};

export default apiMiddleware;

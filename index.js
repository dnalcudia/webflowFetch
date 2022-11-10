const token = 'Bearer 6e2b2d5d37a543c1b69668f0051299d3'
const path = 'https://stacks-wallet.bubbleapps.io/version-test/api/1.1/wf'
const headers = {
  'Content-Type': 'application/json',
  Authorization: `${token}`,
}

const signUpInput = {
  password: 'password',
}

window.onload = function () {
  if (signUpInput) {
    signUp(signUpInput)
  }
}

const logIn = (body) => {
  fetch(`${path}/webflow_login`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((json) => console.log(json))
}

const signUp = (body) => {
  fetch(`${path}/webflow_signup`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    //  .then((json) => console.log(json.response.secret_key))
    .then((json) =>
      logIn({
        password: signUpInput.password,
        secret_key: json.response.secret_key,
      }),
    )
}

# MOODetail (frontend)

<!-- MOODetail is a Single Page Application using React/Redux on the frontend and a Rails API backend.  This repository is for the React/Redux frontend (the backend can be found at https://github.com/maasa333/moodetail-backend).  This app is for keeping track of what prompts certain moods, and to distinguish between those that are within your control and those that are out of your control.  -->

## Installing

In the project directory, you can run:

`yarn start`

Runs the app in the development mode.<br />
Open [http://:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

`yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Usage

After seeding the database for the mood states through the Rails API backend (separate repository), you can begin entering descriptions of promtps to various moods.  From the moods index page, click on a mood to see that mood's show page which includes the input form for entering a new prompt.  Once submitted, the description will append to either the "Within my control" or "Out of my control" card and will save to the database. 

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/maasa333/moodetail-frontend. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

This is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting in the MOODetail project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/maasa333/moodetail-frontend/blob/master/CODE_OF_CONDUCT.md).
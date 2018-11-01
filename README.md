
# Fan Curation Front-end Repo

These are stand-alone web pages, which can be viewed by opening them in a browser.

In order to have the pages work as intended, you have to run the backend on localhost for now.

1. Clone the backend repo, https://github.com/Comic-ConMuseum/fan-curation-spring/
2. Fetch the branch, stable-api-example, and git checkout it
3. Install maven if not already installed, `brew install maven`
4. From the repo's root on your computer, `mvn install spring-boot:run`
  - The backend will run on `localhost:8080` until you do `control + c`
  - Data will persist in the memory cache, but will not be saved between scripts running.

### There are updates to the backend repo that I haven't verified work yet
### When these are verified, then there will be persistent data, and a whole ton more steps for setup.

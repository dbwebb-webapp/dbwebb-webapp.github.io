# dbwebb-webapp.github.io

Website for webapp course.



### To run and develop locally

```bash
docker run --rm -it -p 4000:4000 -v $PWD:/site --entrypoint /bin/sh madduci/docker-github-pages -c "bundle install && bundle exec jekyll serve --watch --force_polling --host 0.0.0.0"
```
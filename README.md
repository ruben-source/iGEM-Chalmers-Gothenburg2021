# iGEM-Chalmers-Gothenburg2021

# General git:

## ... intial set-up
git clone https://github.com/ruben-source/iGEM-Chalmers-Gothenburg2021.git

## pull, add, commit, push
git pull origin master -- or -- git pull origin main  
git add . -- or -- git add [file or dir to add]  
git commit -m "[Text with changes]"  
git push origin master

## ... or create a new repository on the command line
echo "# iGEM-Chalmers-Gothenburg2021" >> README.md  
git init  
git add README.md  
git commit -m "first commit"  
git branch -M main  
git remote add origin https://github.com/ruben-source/iGEM-Chalmers-Gothenburg2021.git  
git push -u origin main

## ...or push an existing repository from the command line
git remote add origin https://github.com/ruben-source/iGEM-Chalmers-Gothenburg2021.git  
git branch -M main  
git push -u origin main

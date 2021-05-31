import re

firstStepWrite = open('firstStep.txt', 'a')
firstStepRead = open('firstStep.txt', 'r')
finalFile = open('mapsFormated.js', 'w')
with open("maps.txt", "r") as file:
  for value in file:
    firstStepWrite.write('{\n\t"'+re.sub(r'\s', '",\n\t',value)+'},\n')

finalFile.write(str('const maps = [\n'+firstStepRead.read()+']\nexport default maps;'))
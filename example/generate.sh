# Diagnostics
RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'
echo "${RED}Now running: generate.sh${NC}"

# Set output file
OUTPUT_FILE="./paper.html"

# Begin generating
cat ../components/01-header.html > $OUTPUT_FILE

# Embed CSS
echo "<style>" >> $OUTPUT_FILE
cat ../components/*.css >> $OUTPUT_FILE
echo "</style>" >> $OUTPUT_FILE

echo "<script>" >> $OUTPUT_FILE
cat ../node_modules/jquery/dist/jquery.min.js >> $OUTPUT_FILE
echo "</script>" >> $OUTPUT_FILE

# Generate the rest
cat ../components/20-header2.html >> $OUTPUT_FILE
pandoc paper.md --toc -s -o temp.md
pandoc temp.md \
    >> $OUTPUT_FILE
cat ../components/99-footer.html >> $OUTPUT_FILE

# Done
echo "${GREEN}✔ Finished running: generate_html.sh${NC}"

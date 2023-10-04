function makeGreat(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
  
    for (const magician of magicians) {
      greatMagicians.push(`${magician} the Great`);
    }
  
    return greatMagicians;
  }
  
  function showMagicians(magicians: string[]): void {
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  const magicianNames: string[] = ["David Copperfield", "Harry Houdini", "Penn & Teller", "Derren Brown"];

  const greatMagicians = makeGreat([...magicianNames]);

  console.log("Original Magicians:");
  showMagicians(magicianNames);

  console.log("\nGreat Magicians:");
  showMagicians(greatMagicians);
  
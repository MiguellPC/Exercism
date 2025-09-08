//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (strand) => {
  if (!strand.length) return '';
  
  const nucleotideReplacement = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U',
  }

  const DNA_Strand = strand.split('');
  const RNA_Strand = [];

  DNA_Strand.map(nucleotide => {
    RNA_Strand.push(nucleotideReplacement[nucleotide]);
  })

  return RNA_Strand.join('')
};

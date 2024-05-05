using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace oabnet.model
{
    public class Advogado
    {
        [Key]
        public int Id { get; set; }
        public int Numero { get; set; }
        [Required, StringLength(255)]
        public string Nome { get; set; }
        public int MunicipioId { get; set; }

        [ForeignKey("MunicipioId")]
        public virtual Municipio Municipio { get; set; }
    }
}

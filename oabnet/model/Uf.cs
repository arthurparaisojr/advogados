using System.ComponentModel.DataAnnotations;

namespace oabnet.model
{
    public class Uf
    {
        [Key]
        public int Id { get; set; }
        [Required, StringLength(255)]
        public string Nome { get; set; }
        [Required, StringLength(2)]
        public string Sigla { get; set; }
    }
}

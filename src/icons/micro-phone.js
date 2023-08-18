const MicroPhone = ({ setIsRecorderClicked, style }) => {
  return (
    <svg
      width="81"
      height="80"
      viewBox="0 0 81 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      onClick={() => (setIsRecorderClicked ? setIsRecorderClicked(true) : {})}
      style={style}
    >
      <rect
        x="0.5"
        width="80"
        height="80"
        rx="40"
        fill="url(#patternMicroPhone)"
      />
      <defs>
        <pattern
          id="patternMicroPhone"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_1_891" transform="scale(0.00520833)" />
        </pattern>
        <image
          id="image0_1_891"
          width="192"
          height="192"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAMAAABlApw1AAAAAXNSR0IArs4c6QAAAwBQTFRFR3BM+PHx+PDw+PHx8+3t+PHx9O3t+fT1//v7+O/v+PHx+O3t+PHx+O7u+O7u+PDv9/Dw9/Dw+O7u9/Dw9/Hx9/Hx+/Ly+PDw+PHx+/Hx9/Ly+PDw+PDw+PHx9+/v9/Dw+O/v+PDw+PHx+PDw+PDw9/Dw+PHx9/Dw9/Hx9/Dw9/Hx9/Lx9/Dw9/Dx9/Dw9/Dw+PDw+PHx9/Hx9/Dw9/Dw+PHx9/Dw9/Dw9vHx9/Hx9/Hx/1wK9/Dw/lwK/VsK/FoK+loJ9VgK+O/v+VoJ////+FoK+1sK91kK+1oK9lkK81gK/1wI/1wL9/b38lgK71YJ/1sG/1sB9/Pz7FUK/18c9+7t+PHy9+/u/10T/1wM+Pb231EK8FcK8VcK9/f4/2Ek4FIJ7VYJ/FsK8dTR//7+61UH/14Y+PT0/1wP6VQI/2Uw51MJ/1IA/0oA+ff44FAC/08A+e/u9/j55lYY+vPz/0MA/1oA41MJ9+jn/1YA+PX26FYX/2Ag9+vq/VwK/1kA9/X1//n5/0UA9/Dw/z4A//v7/PX1/0EA41UX/2In9ePi/0cA6lcY9vT131Qa+N7b9/n6+fn64T8A/zYA/zoA+72z+dfS51kj9+Xj3z0A7VgX81cE31oq5FAB/2Mq/n1c3lMT8Voc3kwA+OLf+sjA/vf3/2Qs/KeY+7Gk+dLM3UYA/ZF6/Yty/ZWA91oN8FYC/fb2/nhV77iv+7So7lQB4Vgj9d/c8c3H+cO77mAv6FAA/2Yz+c3G810k60EA8T8A6lMA/nBF5D8A8lgN4FIN8Kqe4V0w6Vwq71cP3BUA2zgA7DUA7UkA61YP8dLN+5qH/Kye+7iu3i4A9trW3CcA3lcj/ms+4TUA9FkU7Vsj9by06CYA5kkA/KOT/oFi6JiJ5EQA6aSY91sU44t45X9p5nVY7DsA77+35jEA8Ylz8MbA+56N/nRN5VMN67Sr4GtL9UAA6JyO32M874978zsA6GQ7/mk28U4A9k4A7qKU7W5K/YVp6a2i9/7/8Hlb+P//OZHkTQAAAQB0Uk5TAAj8+AP7BgEE/vn4/fn7+lWx/SOmxgw3bRL+zTIYLHP3S5fSi+DZ739cZR2eP+RE8pHnh7+5eemE6un//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9w89MgAACAASURBVHja1X0JWBPX2v8wCWErROMeN9S616V7+2UQxFGpIZrETBaXRG0EDEnhxrAEiRAeECkG6MdaRBAFZW3dl2qt1mrd6t56/Vu1dlG737a3vbf3fts5ZyYB95lRbP+nfQAhgfc373be5bwHwx7VChAGCoWd/i3q3W/g2B5gjR3Yz09479f9OZZQJGKI8hvbp1vfJ3s+33/E+JETBf7+uDh84svDh/XqPnTUmAmD+gXQrwoUBf6JQAT6idDnfgNGP9t92MgVJFzmPPcmh0MLlmNFo9uMvpeHj+/11OAhPdDLhX6iPwUGIU39wAkvdB+BQ8IbCXF4CFihYWG4BK2wsLBQ+J1w3OEGr3CP7DV0zAA/KE1+ooA/mHwRpEPYZ3D34Q5Au8MfkBkmIdQKe0lJid2ooJfRbof/ypYSYRAGAVCYw/sP7TYW4f8D2RAA/7hw3LP9BWYyzyEGtBNqY0mJgkhfX9HcUH6m6fRGtE5vPbNrb3NxFYV+qpWEAl40kmTjM93HQAwi0R+lt+DDoJeGEaR5Ex4aGibNLrFL0ysamr5t2/xbgjW5MCcFrPx8+LHQlpxVcOBK+8byvcVUdolRjYeGi7VuMm9k99G9wa8KfOySFAAtYe/Rz+HmPAcuFuNqo0JX3HC67UCWLSfHlmx1ZqUa9HEaZsXplVlOq9VWmJOTnFl36kxzOni9FBf7E43mvGeG9oGPI+BxYkB2vMeTLwKp1+G4NFshXd+wsS41Jd9mzTLExTFE6/UJzNLrfd9UOZML822/tW6tcGUr1E/gEl0juaLXaBF8JgGPU3b69CTIRlwSJPUoiOLy1szc3GQVQ7VBJvcuGVq+f8UaIBZNZpyzsMz23ca96R6FmpCICTM5fHA/+IsDHovmgg8TujeS2lCJDlHf5ixNySoo0MQqvRTffwEo+sxajbUs98BliEFKhYnd5IujxkL/1vV2MxDDxnV3k0+ES7QKT3rDqczSFLmlVq9SgQccK2O1YmPlSpU801JrLU2pazpHGOOjw8Ld5H+MGggcubCLvRaGDejpIAlAvtFTvLWusMxpscQB6tkS78MgU6qUpj0mW6myvcFlz44OBRDGD/ajOdxljz8AG/i0gHSESwijuuKyJbdQs8fEnXofBlWqfoPFmWu7Ul5lz6ZCBXnksNFdyIQAIKB9nyE3CcTRCk9ze1a+tWBDnErJi3qfLAE2bDAUpny3tcqupgT+Zvfzg8CD6hrxAdLTy+z2F+uyPRXt1hynyZTA8+HfgkGp0hTEJad8sjXdqJUEa8ngl4AyB3SJ6R+lNeP+QWpF8alkW6pGY1DKH5J6BoNcqc+Ms+YfKKcUhMTfQQ7rAx3bI94xg11Df1KL6whFepMzX6/RG+SyR7fk8gR9prWsbq/aowvyz3M/yzjLRyn9gwFzdToP0XCgVG56lMR7+aDUF9hyTxUrpNH+UrL/I9UE4HoHdie1wZRWUdxelmxJUBlkXYBApjIVlMUBOYqWCEj/McAcPSrjKcQmjCcF/tEKXXlm7oaC1Ecj+ncug0q+x1naVqEgqPAV5FN+jwgBEp88YPrtxa25zj2GLnn8XiakmiwpqjOEJzrYH4rRo9gcAfqfIh2CaLVn14b8AvD4u45+xASDxZnfut4ejQvIiUMegSqLsH69SDw42kNdTrGCLU+Xkg8RyFWmzJQ9e41EkMDd2Be5n4ejv8dw0l8SbSyuy03IlMu7mn7EBL3JWtgkVVPBDvJpZMEfxnz2mWgOBsZ/r77QpFfKHsuKlcs0CWXt6R5KQpA9H8acAvM5BHeLKannTI6zQCmXPbYl19fmbi42UkH+5POBvI0RoL+bozGY8hAbyzSmVMPjox8wQWWxmZqNuqBgshdfcwrkp9uKFYJoj6u9dIPmsdIP93ipFqu1QQFUmezVmx8CSD8wn570tjKLXpUglz3eZcjakFVYDhCEQx6I+NA/BDz/vyiq6nItMqXhcdMvkyWkFijzt9IIArnbIhE2TrtJEK2o2py/4bFYz7shyEzIbUJS9DxnfyDCBgncwH1VbU6plXXV3ufBHkFDIwiG1lTIjf6B/5EH7E9VXX5trFz2R61YJUAApcgfeDQuIY4IEw0jAf3p/4byI5P9oQjyy4E1Jci+HBQZKEx3QL+aai2zPIT7iui0eCNQZSoLG4yUxNE4hLUxFQZiz5L+OCH9tnQPr7A34h4A+AAxpBZkWZuNlL974iC2CIADcBP+OkVTqSVWaeBDPKI04pYl8wKJ4GyLNlgLij2UgOzP0h0EYoMmNgqijbtyTZx3zxGyCB/hkyaB/9FCXzMo0Eu4Iciy2Danq4ExfYqVKRJiwv5keLSxwpqlUXHzXxE+AD7aI8Fivpy03MsLzlJkyW2XErg/OYaNKQrAnibDgQE6kGziSj9D/nJI7aLIRYsiIxfFxMRE0qsTBhlHXYhV1ZY1GaODV/gPejALArEhZn8JIW3NN3GUf0bOlzMPPmZaVExMVFTUNPB52rRpMQDQIi8Ejghi5fqEwr326HCyP3zADxCgfi+7xdHGrbkavZwH/YB8QCigflpU1JSoKcyCOBAveCPQWPesh4r87IM2RYFYT+ABjM1OZ6aSB/208NDkT5mK1nT4AYGAbIjspM6climllSAkUnef+1siP6ybGQcKUFdYq4zlR39kJCB/CiR/+vRXmDUdopgShSRpEg2BIwK5PjP/DPAGecPua4lEWO/xbpzwbCzbIJPzoj+Spp+mfvIMZk2eDDBMRxCALtCWlatHNjmVFYpof/Kl+7kzETaUxIMUzbY4jSqW874B0R8DHz8gHxK/evXqg3/960HwicEwFeoCQsDZnBpUlpQ2Shrk8L+PQ/bD+uAOXO2qs1m4RZAdzx89/umvTAb0rz747u53q99+uxp8Orga8uEVyIQohID7rkJusJSWK3QgyscChPfcwz1PBsMtxB7O+SsEwEc/oHbmwYvbrl86fmLhwhPHL11/++LBmQyCKVFQlSN4sMDkjCv2SLTubvdigQgbnUfg2cVWQxxHDaa9L6J/KqJ/5sH6bce3/bJl57kdO87t3PIL+Ec95AJC4NVkji7ZkLqn7JSaCDYPu8eeSIj1HkYKCHVrfi3HFAQjQUj+Ef1v19fvqz60Q22ckx0fnz3HqN5xqHpffT2DgNYDHpsKeUHuXoXEnxx81xIUEKy+0AXszTXxEiBof3z0V1//ZYc9Xkfp0KJ02fYdv1yvrn97pg8BzYIIjpbIVkdpBXnjB96NBcAHD88L11J1yRrOMQwNIIamf+b8+iPXD0kzKB3hWzoqW33o+pH6+TOBIkAEkbRL5hojF5SV24E/HoXd2RoCGDCYFFD28nyNkqsFlSEBAt4XPf/5R6qvbzESFHHLogjjluvVR2ZCKYIsmMTHEsn0zgPp6lD3ywPv9GYBWO/h7lB1+nfWuFjuzx8wAGzcpkwFvuvg2xePHzLqbqMfINAZDx2/+PbBGZOnMyzgDiBWmZm/1U6F340FUAMAA87kxCXIeAIAAjR5xsy3L+77miDuoB996+t9F2k1QFqwnHtoEKu3flKVHep+sd/tu9IATDjCHZadvjk5k5cGTEIaDBXgyEcnzs25C/0AwZxzJz46AtTglQ4WcA4w41K2wn314NtlSIiNJoOj7eU5ej2PNASyoYgB87ftvvn73emHCH6/uXvbfCREjBpzzrtnJn9XlR3mHi66jQUBWC9zWLzrSmEBnyoGI0GIAdX7zmXr7g5Al3FuX/WR+TMQC2Ii+WixXB+XUm6PFpOjbw0MRNg4N0EZG2wJGr4MiJqCNGD3vi8pLXGPpaW+3LcbaMHk6UiG+KRZlAWFV1zxYeZet8qQCMQxYqmuNdei4p4HoncRQIJmQAm6dCieuOfKPnQJyhBgAdhZA2/Mo3ajMdgajBSx4pbIRogNHLlCoqhwZmUqZby8GGQAkKB5C3dfujFHdy/6dXNuXNq9cB5SY54AYlUbctsJaRg5tDMAP6yvOUjqOV3KjwERyAZBCZr10cWbO+8HYOfNi0dmzaSdGS8AMqXJaTinkDQ+07tDiMAXvfJwT9WB5AK+AGKipkInvLB61fsnM+4NIOPk+6uqFyI7BJVgOQ8tiFVaSps8hM49umNX7YcNCF6BKxpAIMkvh8sAABIEALx6PwCvQgBIhhgtjuAhQ7a6dLXE3L0jy+WHjQISJG3PtaTG8kLQAWDVsgcBWLbKqwT8AABLasrZq8AbR471akEgFtDLLI4vlmdp+JWyIyYxKjBv8aqlLADMYgAsWs4n7w4Cm9LLnieIvDFeGQKhsGCTWFHOS4URAK8XgAD+8wEAlq5aPGs+o8W8CgcgLLCCPak/2d0bHIuwF0j8CWlrSi0/ABFeAPNnPRjAf9IAJvMHAAxRLYjMxO5nGBkSwlheEL9en6qX81Ri2orOnMcSwMKHAxCrspRd9uDaRia6F2E9XnSHGnflFvCVoIhJMbQfZgtgHgNgEj8Aykzrdy6pGPgy1E4UCAsyuOfbfBNvAIwRmr+QDYBlAMDMhwEA9xO2CkU4LNkEIgl6mhRIXd9Z+UkQEiGoA9CKsgYwA3oyflaIrhdsNYY2hg+ASiDEAnuRIcaKZL08lj+AKdwBTInhq8RAhgpb1ThuHgM5EIj1GOkOLTmTn8m3II8A0H6MAwAmIuAnQnrnb+nqcKAEsCKGDcnDJZ5ThRq+FeHOAJZx4QBvALHyOFuzMYTsJQLkB2CjyHC1a7NVL3ucAF55OACZ+WdKQt0je6C4rDtQgXOqrP+PAAAzVHjKIyHcQ6AN8hthDilpsBn0vOmPgPEYDwC8zahMFpdcR0lhcgJsSHuEO8LsTTzyQR05FSai5wggKpJHqcaXojMVK0Jg6RvDJuThQZ72Qg3HmlhHQ8TySZ1F6E1OAHz0cwSiVyXvLQFaDCOCMVCHryRrOBcEmN4HJikE93IsALyJAIDNEJ0amsT8KqbKxj7Bpc8pLwlxj+8HADxJhijWf2Jlb0U7Wje8TRGRUSipNY8tAGY76itZ+p4FawSGuJyNxjAHPog2QvaKVCdbAJ07UVBVHhaG6awcWw7MnkVn52D1HsTFnUCwRhCrKWxXE3jeBACgPzRCyalxrAEw9NPdKJGA/kiY14V7udksAKyEAGhPFhWzaBHdQxExiWszjsZ2hQK+eAwGK8Nh9vJC1jnRzi0RsJ8jMjImhilsLJy9hA2AJbORFkMWwAUgLPK1gbBFINdYD1Rlh5CjMGxsuEOiOJ2iYdnZytBPiw4kPooubMCAEgBYupItgMmo8o0Kx2ABl8B0UbAGUFAMNhNgNzTIoQvyXE7JNHDQYS/9MTGA+iiYlJs8A+owKwBLAYBZML0I42LUzgIxLPLpM0sAzqxmewiIi7FxeThBtKeYONbk6aI8Ip+u7IGAkj2AhfNh2RjWXOkuELryOokDgLis5AboCDCsGylWU22FJjnHx093pKCWFLqyDRjAFgCSIVgtmz59qrcbJ5JT1Uwep7TtKgk1D4OFjdB41xUbBwDI+ExDPSlT36LXwYMH50MGsAOAZAi85SD9ZloVIiO5NIHI9frCM/Yw93A/rC8Zmp1eZzMpWeswzQD0+N/6/PPP/4rWkVmQAYlsACRCGZp1hH4f+AVvTUdyFMOlZgMLHVvtYY0v98NeAACqvktmDcDLANhT8/k///a3v72H1j+qAQMSE1c+GMDKRMiC6n/Q7wO/4J+fT6WbQCLZNyDIEzQpp41hKyYOBOFMqGL9AW4A6KaCtz7/59e7/h+9bvxyovqjJUvYAUhc8lH1iV9uMG/d9fU/P39rKt0DgvZGbAFsVEgc4WOxZ9FWiC0AGcMAaPvfevfvh/7bbi8B/xn/d8vxix9BDmw/dv/6wLHtCMDF41v+14jeav/vQ39/9y3k1bybO1a7ORqAuAfYy4UqirkBYIraAMC3BOWiwHLFb7m+CgD4Pq3m/Df3A/DN+Zq07xOXLFt1fUs8/U4X8S0NoKMHhB2AfABAi9MAOHEgAmkAdL7v/v2UlEDUUvZv9i1Zlpj4/ZrDR3/IuHeNLOOHo4fXpCUmLluy7xs7KsbqCOmpv787mSl+cwbgzxmAzFfUnjzj3fe+pqSIDMp48p13KgED1hw++wVB3KvMShBfnEUAKt9556SRfqeU+vq9d1dPfgVtr7kASGEAvMQZAJQg6LxWv/ve/6TH02TM2fHrpxBAWtG6otfj7wUg/vWidSvTgAxVfvrrDrocTsWn/w8AwBSdIjkCcAjGcrRCvqI22P+vfvfEbi8ZaurL9yvTwEo6fHTLa/eq1L+25ejhJPiqyve/BG9hoO8+AQCgzWlkJNuqGTKjCtwBzOhg6Ac22/gAqN92YictCICOaxeWfg8BFLX8nK6+Kwt06vSfW4oggO+XXrjG9CNQxp0nttWvRm1EMew5AB1ZkzFs08h+ICTm4ok7A5h/BBhDxuS47Ds/WwOkY8GCpJrz1+7OAuq1a+drkj5YkJa2cs1nO+0uxjABA3yE7oOaxgWAPgduJcb3Bpu5ULXr34Wsj8n7+iJmzH979/GrhJY2Q2rXV58hAHPnrj228w3XHTzQud7YeWztArAAgM++cqkZI0RcPY66D17hpANyvaGwvCQ0b4QIm2AWa4nWHBPrgMxblocA9v3r9WxGFF774cLKNEjf3KKWta++Qd3esUW98eraliIGwIUfGCZR2a//C7VP0Km6SLb7aXlcKtxOm/tjWJ9GnFCfSsmM5QQAcWBWdfW+nV5ZVlcdXvcBpG9B0sctNSffIDozQeci3jhZ0/Jx0lz4grXrfq5Se3Vn577qahjkc9SBuCwrTAw9j2E9cK1EsRGElJw6UxCAedt2X/pdzVh9wAIk4YAFSTUt625oX9NRdN8f/Pya9sa6lhpE/wdAS7wM0BHq3y/t3sZkKTi04ICILKEChJQ9Mazfy5vC7Ftz4tgF9fRWKCYKlcTmbbv46a9eq68jqK/e3O5FsO7YFyfVr2VI4U+kGW+oT35xbB2gfy6kf/ubX1EMauAZfv304jYY3sDGavY9ySAm/m29IoR8EsOEI/JCS3bZlHFy1rtRX1l44eLdl7x2CEjDq29+UASJnDs36eO1x1q+uLHDRajVhOvcjS9ajq39mPlR0dw3X/X2dAEbdGk3SjXSSryI9W5Uk7wZljj6Yhj2HBlS0mzNYg0ARsNTmFzotg+hPdH5qDlasxbwYC4gc23RumNnW3788osvvvyx5eyxdUVr0fMHP6g5usXofQewXfs+3EYnKabCrQSHvFAbQYjJbhgcuhBiLC5gmVpE4cAiXzZ64f4PL93wPU4i/trRmiIoRQDC3LVFRetajoHVsq6oaC38DpSfosNHr8UTuk79Q/tnz2IaASPZFwwMcTnfeiSEAw5Ie4EMgd2KbAH4PNkMlEtc9emvPserkxJXj9Z8TPNgLgOCIX4urb/ba45eJaQ+BqT/+umqxXSSBeowigfYbYXicmBEORIO2utGigmizcY2Ox3R0SEH4/j9H948ZPTafEpN/HS0qCZpAcMEKEtJc730fwC8dNHRn3Rq38uNh25+uH82bP5AKsChZKM32KAbGAZL9QO0WlxxOSfOwBZAxKRF3iZRmIlY9tmrHQik0v8623L4gyTkEOb6Fu0fPjjccva/iE70v/oZTNPNmse0cHHo5tVnZUEr2h0N2XzGHVpSnqNPYA8AxsRTaTs0e/Eq374AtedmfHP46PaaBUkLaMK9H+YmLaj5+OjhbzKIDnaB3ceqxUyeEZXM2DcQ6WHDSgj5EupWAWbI3mxN1cvY21HkCRALZs9eUnnzpwydrqPJe8fVs2e3A3OU1MGBJGB8tp89e3XHaz76dbqMn25WohTRTG/rBPu0UJytTUr4k6NR39zTQIurfnOyBOBTgqlMQnfxsqU3t9h9zfaAMOi2zrcUbQf6i1YR+LLlPHRtHUB1lH3LhaUfMYlephOWbVooVq7JP20Pc+ADUKF7DNBiaZuNfYGALirRGzqoBZXvfPbNGx3HBXTEHOLVaz++efbYmy3rwGp589jZN3+89ir4dsdrqDe++eydSihAnZqp2apArFKT0mAPMY/ohwUCAH0IR5j9dL6GXatBBLOdiPJ6Y2CJKj9dc9LeCYGOyJjjOvnD1S9//Lmm5ucfv7z6w0nXnAxC14l++8k1n1bup9O80IlFcUqOxqqyirORDgsBhH4jzCH2vTksDz54s6OMEMGkOrClEEHnMwM6nXTOa3MIV9Xrr1e5CPClVKfrfJYA0g8saIcAeU0Qy71ocp1OKiZfgI2LQAt6kuHZ601ZCTIOMjTJd+AECNFH7wAEO289tQH2oBQhjQdLCoKBzudRoKLvhPR/RGepaRMKM6Os220KcjcqwhyOCZiIOfzjD5UgkwsLFtFHfiYjBIshgve3xGfcFojpIApKd9s3XRnxW96H9DM+GDbjc2IABNBgDM0bTh8GEmF9xJvExq1lLHv+mNpqpA/BPMSDyjU3f0p/TUcRD1hAfNJ/urmm8h1Av9cF+I41sU1NZ2WuV4fSKoBOgA4jwxUVNk6VYiREdGjJSFFl5c2vdmZkUPeFQFEZGTu/ullZCeVnFlIAOicXyb48E6uqTWmVPkGYBzNdi0JsKCmWUpuTM7mpsTfDyCDYv+zD9z+7usOYcW8uULoM4OY+e//DZR30T+0woaxVAJ6qFG8S9GE6X/2wbpvAduh0KdsjoN4yKzq56kMwe3Fi5ZoLadd2ZECTo7tV8tE3pHMydlz74MKaykRYZUIGFGUUOwpkLN2wzFmcLTb3FzKnOETYwOF5Yk9zjon9CT5vmcDLg3kIwZJlS9dcSLq605UxJ15668OXxs/JcO28mnRhzdJlSxbPpp+/V4EXcWRAShshxUE4KfKdgetJ4lJXnY116y59ehIWWr1F4vnQoy1ekvh9ZdqFsz9e+2YHpe6Upc5QUzu+ufbj2Qtpld+jAg1ywJNp+mO4dYHTEiRxEON8/fdAhhq1uGdr6R7WABg1YIwpLBPTTFiSmJhWub3l/Pm1X/70g8tLv+uHn75ce/58y/bt3yfS4jPPezrXa4DYHw1VmpyZxR48b1iA7wSECJ7iwz3nnKms29eZDYXvBOJk2hihOtmaNdsP16w7dvQ8k7DQxb9+/uixdTWHt69ZQ9M/i6Z/qveEN5dGj1jVnrJTQILMnc+mw6PoEm5ngDod4oaaTJvTeTSC79OSFhQdrvn5dTrW1Klf/7nmcNGCpLS0xESv+KBWA+8Zey6dQvI4TU6DIgh22og6naEZ59AGKXblm1h37zJjAOAQCSRFXgSzaQQLktau+7iDAx+vW5u0gKZ/tld8YAxDD2pYzuFoMX2AIx43P9f5HFZAANY/T+Kp2sxejTsPMmAOciNFoHmQlrag6FYARbfQ/4r3eL13C8reCycU5G716HByzC0H02G9Gyc8TWUFCRzccadRDNApMy0rDII7AQD7s9i7fZtKl7Z9USRrAEqT1VKskDS+2PuWs4hCrPfLKySKYovVpJRxQkCPUoF9H1N8TTezYbly5a0AVqbR9tNH/zSf+eE0dMhgyr/s0YZ2OAGfGj9JhhKey/kcnJm3dyiCbl2ZxiTdaQRpK5O2dwKQtDKNtj90CshLP+chH7DNpsLo0hI9bjvOKsR6PKGVGCtUTi4t1B0IvCMZvLmWxMSVazoB2L5mJTJA9PYZGX/vhA9uQ58Mmpx2tTac7HnHkW4h9hQZTnhO5Wi4TATo1L+FureYugHqW7kVwNJO9E/x9qZM4jxATJ9qbTZKnmjscxcAAxxSwIIsrj3U3tZL2iX4grQly96p7ABQuWYZY4BeYeLf5bxmxMg0tnYPEQ4jgYA7ztTDyDLa822OhvtcIV+UFsMEaTDZAgD4HFnlO50zWD7t5fr8DXJ9coVCQrjH3WXEjRDr49CGZRdnpRq4HYToGAwGcxXoUOtMmPW9HYBPAWJ84WME58ES+ac80eHeUOyO2fCQBcbTZQXcZ5vJmD5Yb8YOeINV+28FQMcvvhQid/KhE1PCQMDhGHfX2SQibEDwJrE6/Tcn58kSTDfscri3m8J0IVfv/7ADwIf7qzsycN7NP49pZ6VNCp3gXpMjhXC+WXCQcVephcdwZgQBbU7p6Rizqrft71Di/duqvSlQppDHve3eoCpIPpCuBqHkgHuMtxFhY190i7VEW4qF34BaqAbepOn8bRePH2IaKeYcOg4LefTZq5hInoev5IYNZWAbCgdf3ut6Aj9ssBmXeCqseo0qlicARguAGhzZduKcAiCgFOdObDsyj0kh8pwFgA6x5rYThL/7mYH3nBMWiAn75/mDPV3pHiW/Y6HLmYwdZMHb9fu+lsJ8qBQO9Jg/k4kAeAIAAuTUFINtqLnvfYZs+WETVmgl6vQrhRZeM8o7urngjKRZ1ddv2CnKfuM6rQCvMENVlvNhgFxfkFuuAPT3uueEKloNniL9KUWzNSuTjxAxCTtmytO8+hP/Spdq0/91on4+EwLTdTBeGlCb36rT6rTaAfcdNCdEc9p0iqbcTH4nK5EroJNFM2Yeqb/+e3b2oev1vgFbdFcZj9+rzLRuKFZQweRLDxjZKcKGmHFKqmtL4XVNRadBVXDOWf22Ezt2nPgHnE3FDAhbxO/gklyfkLLLHh3MatjiUFJAKYoLrJk8FDmCzrR4Ecyof+/rr9+rn+Gjfxq/k1cGpSn3siLaX6t98LjLAEw0wiz4i70BzrnhMSrJG55NRxHmjPp/wOdPT8nryAFxdQCpBYVXKLVEcOdUnruyYIDWIY42NpXVcp/2J6O3E1HMsMLJk1fX16+myUdRZCScZMB1zGJCqsmpL77nJu6u087EEgKNmeB4uo9ubadPRnjnLTKzItE5h8hJizgdNGE8gEaTs9cYjaabsZlgjralgiB1el2hJSuB68xauoo8je5uBxDgguM6o5gomPM0EoNSv6HsjCI62KGdwHL00oCTKgAABoBJREFUNKp4CChP8Z7kDVw3Rb6RkfT5DnrmKHPMJJLPgL9YucxSutFDSHCgAGwvRfHDekx0B1PGCqezgOPUSG9gExODMER55712ntPJiQVyuaWsnZCCPdxTHK5E8cOGbHLglHFvchbXUQe+tLX3jBCifhp9Xoz7VC25bENum8sDPFgvTpdxiIAiExKdcVcOVwQRnbMUUBeg7MQwY485R8Hy2Nr8unRPtNg8vB+nSxQC4PRyHNcZyyECA0c1jvCNnPauSWjgMddpNrFyeW3K5ipPdLB7Yg+Ol0AEBIBtXTAejRCksp8/HdFRQUNHFb1Dsyd1DP/mkINQbgD0K6IFjXgfzpdY0MaURlDAzR/4jul6cXQ6dMshDW1QKi35dVWKvwhWOIbwuIQDzfCHCHYlOzdkJXCUIh8KJDfLOx0ZZu+/YveU/RvIj8Cxohuvy3RENAKdca8z2ZLK/u69jsPNt42+l3ERIINKbyltBforWAHp53UrFkIQDBBUWECEJueC4LYB/r7EC5f9g6n0WwrYz02Qfp43SomgHuASCt4kVcvtJqY77kzguIFTmrJy0X1Sbu0QjP9V2OguMgKOAm8v02fKuQ9f4Xd9RaxSb0q27oLXn+QJxj3UrWpAk18iHf6UWtqUYzV1/W1ktPVXZmryD1QYdXgw+eKgh7xbUBiAjdnkFgQRxoaClEwQ6Xf5lTQGlazWmduaboz29yeHDXzouxGBTx4ykRRIou3FbblZFmUXMyHWkKrZUOjcKgXmhyC7ix7B3Y4BIqzHMFIsjlbomqyFezRcs+8cN/8qS1xZXbORoMIb4fWaj+RuSj/MryfpEFBSRfOVUr1FpewyJhhS4/bYbBuB+EjCyYndHtndmn4Y1ldrFlA6RXqTNcWiUcV2kfaqag2ldc0eDyVGlzoGBmKPaIEHMWAE2J1Sak9FW6mzoEsu94pVakz51iaXggDW3/y08CHM/13vxhUNNbv9JYSH2PVbWeojvlsW3S4bp0nObT2nUAfhOPnykIe7DfGuuQpsyHhS6y/RGtNPZ+VkPbrbfTvu963bq87W4bjb3LP3fTO4vCH0fmpFHi4OUhuLv83y3q/88NSjG5b1yTnflVNGAhc7yPHdHvXj79CECf3N7mBxdLai4pQ831pQq3+oG65l6EpcVaYloTBn85l0u5YCth8f2hsL7KJbuoUiTDj4RXJTeFi00VNx2VJmMwGTpJLx9Qzg4afKCixZ8JbxdLuaCg8m857v8+iu9b27QR37dDCphdeke4qbNufnpu6pNaQqZdz5AC8YV2ksG5JLna3wnnffJekiEdaFKxBdVK+FF9UTCk/VrlZnKWBDplzFDQOiXl8LHn7ZgdMVOmN8dJjATQ7v27tLH7/vrnqsT08HqQ0FNlWhO7e1Lqc0WVObmaBkf/mdXC7XmwpSU0rl7Q1VHoWUCgt2k+MH9wO/PRDr8iWELB7QkyBX4JIgqcfjaj692VZmA4Y1Tq9PMMTK4bo71eD7sQl6vV6Tqbfm5+pby9dLFR6pREyYyRHw6QuF2GNZ6O/0ePJlMk8rwXFptoKq2Npmysm3OVP1cRoNRJIAcCg7FqDckMD8zJBlLcxP/u7bXYD6eCl4CCtId6/RcHCoMAB7XCsAYujdt7+DdGtxMS5VGKXr955u+82ak2NLtmYp4zSZpttWpkaf6rQmF+bYVJtPnalwKYzxT4jFQSvyzCN7jkORx+Mjv0OSxg0d3gj4IA4XB2Xb7dKq5vLLbZsLrLaclJScQpstmVk2W2FKSkphcuonV9qbGs65PCVGKR4qwDeZzcG9+g6ED+QxU09D8AN/tXe3nsM3keQm//CQMCLbXqIg0oubd23deKr133WbD3wC14Hv6q60tV8+Xd5Qsd4Vby8xqiWhIQLCTZLBvUYNwLracN5Xkvzgnx7YbegwMUmaHeKQkFCcyDaWlNgVasKVXrWeXlXpLorwwFkwYKsWFhISjgPi3S8+/0If+Nz9hNgfuUTo7/fu07fnCIIEZGkBipDQMAmhVWdnK+iVnR2vJoJwQDqg3WEmybyRvZ7u1gN5xj+YfDrmpInoN2DM0889owUoyLxNQLVDOy8xrnO4zfBH4SO6jxrSI5AGH4j9OZZQ5A0++g3o9sJTz414GW+E1HZaeY7w8f27PzlmQg/G1QaKhNifaQUIAzvckLBfjz4Tuo0ZPOqlJ5988tlRL/Qd3W3coLG97/rah13/B/98cAGF8xIlAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
};

export { MicroPhone };

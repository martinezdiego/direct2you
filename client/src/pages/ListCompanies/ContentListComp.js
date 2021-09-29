import React, { PureComponent } from 'react';
import { Layout, Input, Row, Col, Pagination } from 'antd';

import CompanyCard from './ContentListComp/CompanyCard';

const { Content } = Layout;
const {Search} = Input;
const empresas = [
  {
    id:1,
    nombre:'Macdonald',
    descripcion:'Comida Rapida, Hamburguesas y mas!',
    src:'https://media.istockphoto.com/photos/ayutthayview-in-porto-go-bangpain-mcdonalds-restaurant-in-mcdonalds-picture-id1040399894'
  },
  {
    id:2,
    nombre:'Apple',
    descripcion:'The best of the World!!!',
    src:'data:image/png;base64,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'
  },
  {
    id:3,
    nombre:'Siragon',
    descripcion:'Lo mejor en tecnologia y electrodomesticos!',
    src:'data:image/jpeg;base64,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'
  },
  {
    id:4,
    nombre:'Wendy\'s',
    descripcion:'The best of the World!!!',
    src:'https://upload.wikimedia.org/wikipedia/commons/6/66/Wendy%27s_logo_2012.svg'
  },
  {
    id:5,
    nombre:'Chopis',
    descripcion:'Lo mejor en tecnologia y electrodomesticos!',
    src:'data:image/jpeg;base64,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'
  },
  {
  id:6,
  nombre:'Macdonald',
  descripcion:'Comida Rapida, Hamburguesas y mas!',
  src:'https://media.istockphoto.com/photos/ayutthayview-in-porto-go-bangpain-mcdonalds-restaurant-in-mcdonalds-picture-id1040399894'
  },
  {
    id:7,
    nombre:'Macdonald',
    descripcion:'Comida Rapida, Hamburguesas y mas!',
    src:'https://media.istockphoto.com/photos/ayutthayview-in-porto-go-bangpain-mcdonalds-restaurant-in-mcdonalds-picture-id1040399894'
  },
  {
    id:8,
    nombre:'Macdonald',
    descripcion:'Comida Rapida, Hamburguesas y mas!',
    src:'https://media.istockphoto.com/photos/ayutthayview-in-porto-go-bangpain-mcdonalds-restaurant-in-mcdonalds-picture-id1040399894'
  },
  {
    id:9,
    nombre:'Macdonald',
    descripcion:'Comida Rapida, Hamburguesas y mas!',
    src:'https://media.istockphoto.com/photos/ayutthayview-in-porto-go-bangpain-mcdonalds-restaurant-in-mcdonalds-picture-id1040399894'
  },
  {
    id:10,
    nombre:'Subway',
    descripcion:'Comida Rapida, Hamburguesas y mas!',
    src:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAABFCAMAAABHVYkeAAAAllBMVEX///8AmUf/yQD/xwAAlT0Al0EAlDoAkTL+56oAjy389d3/9d3+1FBYrnMAmET+7sBns3/c7+OhzK6/3cgAjif+/PMAixn9zB785qXJ5Nb+zSmpzrFjsXnw9/K32cP978b98dCAvZJ3uIr+1V/9z0H9+upNqWnk8Ogyn1eXyqb+2Gj93oD923P84pSJwZs/pWL96rX834kwZGU9AAACW0lEQVRoge2VWbOiMBBGv0gC4gJicEEFcRf1uvz/PzfdgF5rxCqoeZmHnNKAkcqp7k4awGAwGAwGg8FgMPxP6GH9Z0fp/e77fooljSMUl45f0KEH4kTrCKBRA5HWScyG1WKxot8IaDrgdYL5PLmG67paf2LlbLClsYv80plaJdsd9NhxF8DYccbA3nXGEQ5HRyolneMBWeiEHOXKtW1bCrsf19KmVqvghB6N5KWL1Wm3nswQOUINAFcIB+gr4QTwlBCKvwKZLew5RRuKArdeqk+09GQ2mVR4e+cLjdby06sdIeRgIGlGDwtvYtOU8jxX10vzllbeFbd/e6cAia37p5dcMgMyKeT810tTWgb1tHm8s3all2Y3dN+t8FIdKZ2sf/PaGYJ6xUVZX4tj+1Lfn4r6snf+65Ur4CrZ24Blvro163zxtqu93m2xuHnkjbjWtxvXOmnixehRCD6829Ppy74ir/CU8sg4BCs9vj02kfo8/PD6/uZzX/l8wKq9ik8re+O+m5+ffe3aAt28sACL7+xdFjv83bshr9dHTPm0Acpt7lXrJFkr9tLZ5SRHDaL1y6Yx4XhTPq2tzYzHUZ7ny4X/eMQUjzpSJoXHnUKEeNvPeZcgr9tAe3/2qqIvdZ8/rTOmr3lqnQs7V3IR6WOvq71B/YgfZCr7cG/HWbVKLV79eUKZR9+VUrr9vSOlHVKpy548LFszQm7dSVK/wG3rkaZLomxZ98flPOX7bvk+Sov5KLtmFI6+robckIJEJ4fXJX9VJYgPtbXUNtoNHjYYDAaDwWAwGAwGw7/wB8ChLfPDnrJuAAAAAElFTkSuQmCC'
  },
  {
    id:11,
    nombre:'La Nota',
    descripcion:'Las mejores Hamburguesas en la NOTA!!!',
    src:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBURFRgVFRISGBgYGBgYGBgZEhgYGBgYGBgaGRgVGBocIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHzYrJSw0NDQ0MTE0NDQ0NDE0NDQ0MTQxNDQ0NDQ0NDQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDE0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAAAQQFAgMGB//EAEsQAAIBAgEHBgoHBQYGAwAAAAECAAMRBAUGEiExQVEiU2FxkdETFDJSVIGSk6HBBxUWQmJysRdDotLhIzM0grLwRGNzg5TChKPi/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECBAMFBv/EACsRAAIBAwQBAwQCAwEAAAAAAAABAgMREgQhMVETFEFSBSJhgTKxQnGRI//aAAwDAQACEQMRAD8AnRRwtPQMQQhCAEUcIAWijhACKOEAUDHCAKEcIAoQhAFCOEAUI4pIFCOEAUIQgBFHAyAKKZRSQKEcIBshHCQBQjhAEIRwgChC0IAQtCVeOywqHQpjTf4CQ2lyWjFydkWbsFFyQBxJtK3EZbopqDFj+EXlY+HqVTpVXP5RqAkinhkQalE4S1EVwelR+mzmry2G2XHbyKB9eqYHKGKOxEE2rckKqlmbYqjWZdYbNx211amh+BACfWx+Uyz1mO8tju9FRhs3dnPeO4obkPqjGWqyeXRuOInXDNrD2tapfzvCG/dKfKeR6mHBYE1KY2m3LQdI3iUp/UIydkzn6alJ24I+Fy3RqatMI3mvyT6r7ZYqwOsEHqN5QPh0ca1Ug77SMuEekdKjUIt9061Pq7pshXT2ZSr9OlFXjujqYSowGWQ50Ki6D7vNbqPylxNCknwebKDi7MUUcJJUIo4QBRWjgZIFCOKAKEcJANkcI4BjHHFaAEUcIARMQBc6gNpjlDlTFmq/gkPJHlHjxErKSirs6U6bqSxQsbjnrnQpmyb23mPD4ZUFgOs75lSQIAAJnMFSs5M+l0mijSjd8imFR9EE8B/sTIzCvqAJ2BkJ6gwvOBsqNxg2jrc38m+BQOwvUcXY8AdiDgJMxuNSgunUcKN28k8FG8yU7AAsTqALf5QL/pOArYhsQ5rPv8hdyJuAnm06brzbk9keTGLnKxdvnSL8jD1COLMFv6rGWeScqridIBGRktpK2vURq17xOVweGeudGkt+LnUi+veegTr8l5OTDJoqSzE3dztZuPV0S9eFKC+3kmpGMXaLucvlzAihW5AslQFlHmsPKA6JBvLrO2oDUooNqqznoBNhKa010pNwTfJu0jbhuaMThlqCxHrm3JuUDSIpVjqOpHPwR++OYV6KupVhcGaqdVxe5y1ejjVjdcl8RCUeRMYyMaFQkka0YnylH3esfpLy09CMslc+aqU3CVmEUcJY5ihHCAYwjhAFCOEkGyEcJAEIRwgChHC0Ar8sYvwaG3lNyR8zKzBUNBek6zMsot4Svo/dTV8zJExamf8Aij3vpenVs2YwmVplhqL1jo0qZfidiDrbumNu27PXlUhBXbNUwch7oAWJFrKNI/DZOkwubI21qhb8CclOonaZd4bCJSFkpqo6B85mnq4R43MVXV5JqKIuRfCGgi1UKso0CDblKNQY+rVbokLDZsUUPK03AJ0VZuSovqFht9cvxMGeylrE2BOrWTbhxmBVZpvHa5iMVQKLKAANgAsB6pAytlVMMvK1ufJQeUx+Q6ZTYrOV6gtQTQXz31v6l2CU+hrLMxZjtZjcnumqlpW3lUO9KhKfHAM7u7VHN3c3PADco6BHHEZvPUhBQjijG0AJlCC5CyhSJAdfLQgg9X+7dRl9gMSKqK43jX0GVpF9XGYZvPou9Pde4m3TSurHgfVKGLyXuXloRwms8UUIQgBFHaEAUI7QgG2EijKNHnU7Zl4/S5xPalM49l8X0SITQMdS5xPah47S5xPajOPYxZviJtr4a+yahi6fOJ7U1YrFoEezqTomwDC5JFgB2xmuyFFlJghpMzHb3mTbTTSo+Dd03rYfD+seL8hrcPhvnn1neR9PpHjp7ltkbI/jIDvcU/uqNRfpJ3LOso01RQqKFUbABYCLD6OimhbR0F0eGjbVIOW8p+LICAGdzooDsva5Y9AniVJzqzwRjlKU3dkzFYpKS6buqLxJ29Q3zn8XnTt8DTuPPqHRXrAlFV0nYvUcu+8nYOhRuEvc3sjrUUV6o0g1yiHyQoNg7DeTaaFp6dKOU9y8qWKTf/Cq08Vi99VxwTkJ2751WQ6NWnSVKujpLqUhtLk7gekSwdwq6yqqONgo7pT4nObDJezO5HNoSO3ZOM6kqqtCOxyIeLzZLO7JVCKzaWiUvYnbY8JobNmsNlametCJ1CVQ6B05QZdJbfeBFxaUiZ10D5SVU12N1vYjaDaTCtXaslexeNScdkyqrZDxKbKaP+R9fYZW1GKHRdWRuDi3YdhndYPKNGv/AHdRW6L8rsm7EUEddF1Vl4MLidFq5Rdpo7R1NSPvc4G0REn5ayX4oVdCTSc6NjrKMdgvvUyDNsZKUVKPB6FGqqkboBI2EOjiR06pIEjUTfEL0EfpNOnf3GL6ov8AyOkij9Y7YXHEds33R81YUUdxxHbEWHEdok5IWYWhDSHEdsNIcR2iMkLMLwhccR2wkZIYsvWydRO2hS92JgclYc/uKPuxMjgW3Yiv2qf1EXiT+lV/ZpfNJ8flL5HsWXQvqjD8xR92sRyRh+Ype7Ez8Sf0qv2Uv5IvE39Kreyn8sjOXy/sWXRh9TYf0el7ExORMNzFP1Lb5zcMHU9Kqe7Qw8Uq+l1PdU+6PJL5f2MV0cjlml4LFuNgdVYdgH/rNcs87MnOqJX8I7lCFN0RbK2/kAb+Mqka4BG+exTllBSTuehopJxcGWuRMs+LgUqpPg/uPt0PwN+Hp3S7yxk8YumpRwGU6SPe63I1g23GciRHhar0DejUZOK+Uh/ynZ6pxlRTlnHZlaullF3iGJR6R0a1NkOy9roelWGqXOb+W0potGqwULqR9qlSbhWtsIipZytbRrYdXG8odR60aYMcm1toNNjtFmT+kmX3Rxmn+jNVnOStJbotcu5MOLRSlReSSQpN0e/nW38JzVfA1qQOnh6gUbSoDLbeeTulrh8i0BroY6onQtRSOy8mtk6uVK/WJsRY/wBnTvY9MpTkqey4/wBHOFSUeEQ80ccLHDk7LvTPFD5SjqOvtkTOPBeBreEUcirt4LUG32tsm4PNtaTo4xetDddSAdIOvYZd47CJiUKPZkYg3Vt4O1SJSVSMKuUeHyWUsZZI4CuqjleS48ll1Pfda2ud5ktqhooavlleVqsei/TbbKcYrAYRiFW7qbGyM7g9Z1Caq2cFasdHD0GU+cw0mHTojUOsya0XXSUV+2XnLN3Ssbc78SvgxRvd3dSBvCqblzw4TnjNlTDOjFqgqabbWcG56jw6phaaadPxwUTfpaWMbv3MDN+bmS0xJqu4YhSqpZiuvWSdXRaRMY+gp4nUOszqMkZMq0KKoKqrpcth4IMQzDYWJ16rSK88Kezs2Z9bJSkom9M38NzZ943fM/qDDc2feNN60a/Pr7lYCjX5+n7n+s83y1PkYcI9GkZAw3Nf/Y/fD7P4XmV9pu+b/A1+fp+4/wD3H4Gt6QnuB/NJ8tT5DCPRoGb+G5ke03fMvqDDcyPbabPBV+fT3ImQp1+ep+6PfI8tT5DCPRp+oMNzK+03fCb/AAVfnqfuT/NCT5Z/IjCPROIiC9B7JF+qqPN9juP0MX1VS81/e1O+cLR7LbkvQPA9hh4M8G7DIgyVS4VPev3xDJVP/me8aRjHsm5M0TwPZC0ifViedV9VZpl9Wp59f/yKnfFo9i5urUQ6sjLdWBVhbcZ5/WwrYWo1F76taNbUynZad19WJ59b3798g5UzdSsmp6gcDkMzlgDw17jNmkrRg8W9mWhNwkpI5Uxia7OjmnUUq66iDv6RNonpNHsU6sZxyQ0R3fQRGdzuGwDix3S0p5tV38upSTo0Sx7ZLzQqoEdNQqaZZr7XU+SRxAGq06O0w19TOErRR5lWtKUmjkHzRfdVpE9NMj9JWY7Iz4caVSkpTz0JZR+YbRPQ5VZYynTpI6m7sysoRVLE6QtrsLAStLVVJSSaucFLHc4oYVPNHaZdZsY3wb+LseQ92p/hca2T17ZU4Og+gqilVY23UyB2mXOSsh1mqI9RQio2kFvd2NiAOga5qrYOLTZrqypOH28jzrwWgy4hRqYhKg6fuv8AKY4LRAVTo6HgXqtdSwZ+LAa2A4SbnbjE8EaIILuV5I+6Abl24Sko4jRXQZQ67gSVK326LDWAd42SdM341crRjKUWkWGKAsyWXR8CKhKropp35LICTog3sRvlIZMr4q66CoETUSLklrbNJjrsNwkXA4J8Y+gnJRTy3tqA4DieidW1y+DRn4Yb89G/N7J/jVXwjD+zpnV+J9w9W3snZ1ZEw+R1pKEStXVReyhk36yfJmVTAn0jEe8HyE8vUVFVldPZcHnOTk3J+5MWMCQ1wJ5/Ee8mQwJ5+v7S90zYrsXJUDI3iJ5/Ee2v8sPEm9IxHvB3RiuxckWjtIpwTc/X9sQ8Sbn6/avzEYx7BJtCRfEm9Ir9qfywjGPYJ4EcBMpRgxhaO0dpAMbR2jtHaAK0LTK0IIK7K2SKeKWzizDyXA5S9HSOicbjsHWwhtVXSTdUXWD18PXPQyJiyAgggEHaCLg9Ymyjq5Q+2W6LRlKDvFnnKhXsQdmsEGxEn0Mq4lNS1dMDc40vjLnHZrUah0qZak34fIv+Xd6pU4jIOKp7FSqOKmx7DN8alGouV+zR5qcv5rftEhM5a420aTdTkTZ9p6noye8PdKRy6eXQqr/kJ/Sazi04P7BkqhT9kSoUH7l42c1c7KNJet2MhYjKuJqXDVtAHci6PxkDxsHYtQ/5D3TdRpV38jD1D0kWHxl/HCO+37LY6ePLuYJSC3ttO0k3J6zMatZU2nXwG2W2HzaxD/3lRKY3gcpvhL3J2QKFA3VNN/PfWfUNgnOeopw5d3+BLVJLGmjmsnZBq4mzVL06fD779Q3dZnZYbCpSQIihVGwD9TxPTNxgRPNraiVXbhdGSUnJ3kzEiaqqzfaaqkzogFEYjEQEkBCO0LSAICIiOBgChC0JINsLSH4PEc5R928ehiPPw/sVO+Wx/KIJkxZwouxCjiSAPjKXKuVKuGALNQYnXoim4IHG5PGc/gcPWyk7M78hLFtK+h0IAOM009I5Ryk7IN2OuGU0ZS1NXqhdpReTq4MdRlLWzvCNY4drf9RbkdEmZSyi+FRVPi41aKIge4Gy6i0o8Jm1WrkO4VF1WRyQzL06Iut51o0aVm58ewe0fydphcQKqI630XUMLjXYi+ub5BRK6gKFwwAAAA07ADUANUjYzKbUfLqYRTw0mv2TJ4XKX2C9luW0Jy/2tW/7u3Gz2+CmYYnO/QNlp03FvKV3AHRrWdI6Oq+EQ5JHVmMCVeAxtavTWotOiocXAZnv17Nkkh8R5lD3jTi6Ti7Ni9ybc8fn+swKA/dX2V7pG08RzdD3pH/rKzKmS6+Jvcqo1ckV20RboCzpCLbs5WJSTLCtlHD0zZq1FTw0lv8ACbMPj6dTUlWm/QGF+yee4nJiI6oKis7EgBLsAb2sbgbTIWIwr0m1ggg7RcEH5GektDGS2luUllHex6sRMWIUXJAHEkAdpnI5v5x1HK0XVXY6kdqmhfgrG2s8DN2c9JmAaoqqCCLCqXF1F72IAExejlGpjIvBqXBdtljDBgpr07k21NcX69knkTzrN7Jb13DimrIhBYM2iGP3Vvx3+qdy1avtNGn74AfGTqdNGm0ou5WLb5Jhml5CrZSdF0mSiF2XOJQC/CVjZzKXCimhubaQqnQB69H4zjHT1HukTklydEBGFlPlTE4lELBaaKBYnT02uTYW1TjMRlXEOSGr1COg6IPZO9HRSq7pkylikz0sCOczm7iKiUlUlHLnSUNiVDAHYtjrvvly1et6Ourf4dbfpOFShKM3EKV1clGKVFXLyobMKQPDxgH5TCrnAqppkUrXsLV1JvwtC01R+wyRdQnN/ayn5g94IS3pKvRGSOotE7hQWbUBrM5J8mY9zd6r236NUDsFxNwyA5HL8bbrxKW7Cxl1pormSClvwQq+CrY+qSqlUvynYHRUDYo84gbp1WGyf4GmKVEhANrFdJiTta3GUJzcO5MQP/kJ8hNZzeqjyTXH/eWaamMoqKlZIN3dzpMLk1KbaYBZztd+U56vN9Ulk95PzM45ckY1fJqVh11V75Jw2Fx4JFR6xQgg6LUWY33cs6pwlp77uSZN99yJnBnA7EpTJReI1Mw433dUj5q5GXEuz1LlEIFvPY67E8I8Tm3iHN1p9Fi6X1bDqM35NyJiqelfwyX+7TdbMdxYmegvFGjjBpMpUu6lvYyzqx6AimioNG4uFA17CNW4SqzeyX41VCnyFGk536O5R1yZi828Q50hTJ1bC66u0y0yBkd8K3hHpV2exFlamEAO293u0t5I06Fou7IqpuSXsjqFUAAAAAAAAbABqAEYkXxp/Rq3tU/kxjGKf0at2p3zxHCTdy9yUBKTOLK60EKK3LYW1HWoO/rkHLNLG1b6C1EW+pFYA2GzWpvKmhm7XZwatOro7WKlGc9Au+08ZtoaaH85y/QcnF8EzNHJpqOcS45K6kHF9l+oD4mX2W8mLWQsFGmB7Q4Hpm+hXCKqLhq6qosBZNQ9TzZ46eYr+wO+UqVZuplHj2EW07s8yr0jTfUSLEMp3gg3HrBEtcqY98Y6Ko5TBVCjidvadZkzLGSatRyyUXtpEgFbGx2yXm5k9sMS9ShXLkWWyKQg3m+kNZnpTrQdNTf8kQ1jJpcMlYjEJk6ktJAGe1ydxJ2ueOvYJzT4qti3VGqMdNgoF7KL9Al/l3CNXIZKVYGwUgoo2bCLNKajk7EU3VlpVNJWBHJvrE5UFBxcpcvsVFZK3BZ5eyZSoIgRQLXBO9rC+kem85rD4dqjBFF2bUB17z0S+xuHxOKe9SnUReimzADgAJOpYZKCMtKniC7C2m1OxN9oGvkiWhU8UMW7tiVptJexV50ZSvakjXCDRvxIFi3yHrkDNvJPjNTlA6Ca36eCDpMMRkfEMxIo1COqX2bOHfChy4rcu3IFJiAR94njLynGlRag9ys7ynb2RljhhsBZqdFPC2OidZKht5M5w16+OqKhcksbBb2RRvNhwEtsv4J6zsyU6hBIIvTYbtliJXYHAYqi6ulKorD7xQEAHbcb5zoxhg5Npy/Jars0lwXWOyZhsJQIKB3I1O3lE726AOE41+U3JWxY2AA19E6LK+FxNbWy1HOwHweiLcAt9UgYPI9YOpZKlMKQdPwbMQRwCg3M6UJKEW5O7Iq8JI2/ZbFeZ/FHOx+sP+ZX/wDFb+WKc/WS/Bz8ZxJz7xI/cU+3+sQz/wARzNP4984dKeoG47ZrxYuwYAnSUHUNhHGT4IdFM2d2fpAxPNUx2d8P2hYjm6fYJ56o/DU9SmJ9JdWhUF9t1Ik+np9IjNnoP7QsRzdPsi/aHiObp+yZ56W/N2GIsPxdkeCHSJzfZ6J+0PEc3T9mbF+kWvzNPsnmZqE7QdWqMP0t8Y9PDojOXZ6cPpFr8xT+PfH+0Wt6Mnx755f4WxvytXXMAfxMPWY9PDoZyPUz9Itb0ZIv2jVfR1nlgqsN57TBKm25O3jHp4dE5vs9Pq/Se6Gxwy36z3zAfSo3o6dp755xi3DMCDfkjfvhTwpa3TJWmpv2Gcuz0lfpVO/DL2nvkpfpKY/8N8TPJqiFSQZLasCq8sjk69f6w9NT6GbPT/2kH0b4mP8AaSR/w38R755P4cgnlMeGszJMS1731devXI9NDoZs9WX6Sb7KA9ozFvpKYbaGr8xnmdNKe1q+vzbECBdd1QaumR6aHQzkemr9JQP7j+OC/SIL66B9ueX1K2ibaW3pvaC1l5wR6aHQ8jPVR9JKDbQb2zMx9JNPmX9qeVLWXfU+MxOK3Bum/wAo9NT6HkZ62v0i0j+5f2v6Rj6Q6PM1O3+k8n8KR9+3rms4ht1T4yPTQ6HkZ6+PpBoc3UmX29oH93Vnkr1GKJyiSSTtmtXqDYz9selpk+SR6/8Abqjzdb4QnkHjFTz37THHpaY8kj1f6qw/M0/YiOSMPzFP2ZOhPWxj0Yc5dkIZIw3o9PsMRyRhz+5XtMnRCRhHonORAORMNzK9sx+o8NzK9ssoRhHoZyK76jw3MpB8hYbdRA9csYRhHoZyKoZAw/Nn2o/s9ht9FT1y0hGEehnIqjm7heZSY/ZrC8yst4RhHoZyPM89sm06FamtNAgZLkDjpbZBopsHRLvP1C2Jpgc2Pix7pGw2CBIux2bpyx32OuWxQ4uldwOJA7TPSVzUwth/ZnYN/RrnDYjClaybwXGv17DPVlXV6h+kmMU3uRKTXBR/ZXC83/FMTmnhebl8RCdMI9FM5FAc0cNwYeuYnNLD8X7FnQwkYR6Gcjnfslh+L9ixNmhhzvf4To4rScI9EZyOa+x+H4v2CBzPoec3sidJCPHHoZyOZOZtHnG9hYHM6lzjews6WEeOPQzkcx9jqfOt7MRzRTdV/gM6iK0eKJPkkcx9kV53+A98J09oR4ojySNkIQligRCOEAIQiEAcIQgBCEIATKYwWAcPnl/ik6KSf6mmnDbZtzu/xQ/6Sf6nmrD7ZRe509jU6aVRfzCei3nnyi7j8wnoJlktyGxGEICSUFCEIAQMIQBGKZQkgxhCEAUUyigChHCSDOEISoCIRwgBEI4QAhCEAIQhACNYpsCm14CRwGd3+L/7afq0ww22Gc9VXxTFWDDQQXBuL8Jqwla7lNE6h5X3T0CUTOrRtp/3i/mH6z0Azz3DuBUUk2Gmus9JE9CMsnuUkKEcUkqEUcIAoRxSQEIQgBCEIATGZTGAEIQgGUIQkAIhHCAEQjhACEIQAhCEAJLTyYQkPgtHk8syv/ian5h+kl4bYIQnNHVkOvv/ADL/AKhPSl2DqH6QhLrk5scQhCWKMcUIQAihCAEIQgCMcISQExEIQDKEIQD/2Q=='
  }

]
function Getcards(props) {
  let empresas_filter = []
  if (props.filter_empresas.length > 0){
    empresas_filter = props.filter_empresas
  }else{
    empresas_filter = empresas.filter((_,index) => {
      if (props.init <= index && props.init+9 > index){
        return true
      }
      return false
    })
  }
  let ItemCards1 = empresas_filter.map((empresa,idx) => {
    if (idx<3){
      return(
      <Col style={{marginLeft:'2%'}} lg={{span:7,offset:1}} xs={{span:24}}>
        <div style={{justifyContent:'center',textAlign:'center',alignItems:'center',display:'flex'}}>
          <CompanyCard name={empresa.nombre} desc={empresa.descripcion} imagen={empresa.src}/>
        </div>
      </Col>
      )
    }
    return []
  });
  let ItemCards2 = empresas_filter.map((empresa,idx) => {
    if (idx<6 && idx >= 3){
      return(
        <Col style={{marginLeft:'2%'}} lg={{span:7,offset:1}} xs={{span:24}}>
          <div style={{justifyContent:'center',textAlign:'center',alignItems:'center',display:'flex'}}>
            <CompanyCard name={empresa.nombre} desc={empresa.descripcion} imagen={empresa.src}/>
          </div>
        </Col>
      )
    }
    return []
  });
  let ItemCards3 = empresas_filter.map((empresa,idx) => {
    if (idx<9 && idx >= 6){
      return(
        <Col style={{marginLeft:'2%'}} lg={{span:7,offset:1}} xs={{span:24}}>
          <div style={{justifyContent:'center',textAlign:'center',alignItems:'center',display:'flex'}}>
            <CompanyCard name={empresa.nombre} desc={empresa.descripcion} imagen={empresa.src}/>
          </div>
        </Col>
      )
    }
    return []
  });

  let CardsObj = []
  for (let i = 0; i<3; i++){
    let obj = null
    if (i===0){obj = ItemCards1 }
    else if(i===1){obj = ItemCards2 }
    else{
      obj = ItemCards3
    }
    
    CardsObj.push(<Row style={{marginTop:'4%'}}>{obj}</Row>)
  }


  return(
      CardsObj
  )
};

class ContentListComp extends PureComponent {
  constructor(props){
    super(props);
    this.state= { page:0,
                  filtro:[]
                }
  }

  render(){
    const ChangePage = (numberPage) =>{
      let newvalue = (numberPage-1)*9
      this.setState({page: newvalue,filtro:[]})
    }
    const onSearch = (value) =>{
      let text = value.toLowerCase()
      let match_empresa = empresas.filter( (empresa) => {
        if ( empresa.nombre.toLowerCase().indexOf(text) !== -1){
          return true;
        }
        return false
      })
      this.setState({filtro: match_empresa,page:0})
    }
  
    return(
      <Content style={{ overflow: 'initial', backgroundColor:'999999' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
          <div style={{width:'100%'}}>    
          <div className="bar-search">
            <Search placeholder="Nombre de la empresa que desea buscar" onSearch={onSearch} enterButton />
          </div>
          </div>
          <div style={{margin:'10px'}}>
            <Getcards init={this.state.page} filter_empresas={this.state.filtro} />
          </div>
          <div className='pagination'>
            <Pagination 
              total = {empresas.length}
              defaultPageSize = {1}
              pageSize={9}
              onChange = {ChangePage}
              style={{textAlign:'center',display:'flex',justifyContent:'center'}}
            />
          </div>
        </div>
      </Content>
    )
  };
}

export default ContentListComp;
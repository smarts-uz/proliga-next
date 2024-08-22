'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const Competetive = () => {

  return (
    <div className="relative w-full  mx-auto">
      <div className="overflow-hidden">



          <div className="w-full flex-shrink-0">
            <section className="flex h-full bg-[#222222] md:px-[6rem] px-[1rem] py-[3rem]  ">
              <div className="mt-40 sm:flex ">
                <ul className="list-inside  pt-[15px] ">
                  <div className={'flex pl-16 text-gray-400'}>
                    <p>Jamoa</p>
                    <p className={'ml-40'}>Ball</p>
                  </div>
                  <li className={'flex mt-3'}>
                    <p className={'me-2 '}>1</p>
                    {TriangleIcons('green')}
                    <p className={'text-gray-400 w-5/6'}>Arsenal club</p>
                    <p className={'text-gray-400 '}>2048</p>
                  </li>
                  <li className={'flex mt-3'}>
                    <p className={'me-2'}>2</p>
                    {TriangleIcons('red')}
                    <p className={'text-gray-400 w-5/6'}>Chicago Bears</p>
                    <p className={'text-gray-400 '}>2015</p>
                  </li>
                  <li className={'flex mt-3'}>
                    <p className={'me-2'}>3</p>
                    {TriangleIcons('green')}
                    <p className={'text-gray-400  w-5/6'}>Detroit Lions</p>
                    <p className={'text-gray-400 '}>1990</p>
                  </li>
                  <li className={'flex mt-3'}>
                    <p className={'me-2'}>4</p>
                    {TriangleIcons('green')}
                    <p className={'text-gray-400 w-5/6'}>Eagle Eyed</p>
                    <p className={'text-gray-400 '}>1920</p>
                  </li>
                  <li className={'flex mt-3'}>
                    <p className={'me-2'}>5</p>
                    {TriangleIcons('gray')}
                    <p className={'text-gray-400 w-5/6 me-4'}>The Kings</p>
                    <p className={'text-gray-400 '}>1885</p>
                  </li>
                  <li className={'flex mt-3'}>
                    <p className={'me-2'}>6</p>
                    {TriangleIcons('red')}
                    <p className={'text-gray-400 w-5/6'}>Born to Win</p>
                    <p className={'text-gray-400 '}>1755</p>
                  </li>
                  <li className={'flex mt-3'}>
                    <p className={'me-2'}>7</p>
                    {TriangleIcons('green')}
                    <p className={'text-gray-400 w-5/6'}>Red Bull Wings</p>
                    <p className={'text-gray-400 '}>1740</p>
                  </li>

                </ul>
                <div className={'mt-10 sm:ml-80'}>
                  <h1 className={''}>RAQOBATLASHING</h1>
                  <h3 className={'mt-10'}>
                    Boshqa foydalanuvchilar bilan umumiy ligada qatnashing, Ulardan{'ko\'proq'} ochko ishlashga harakat
                    qiling va mavsum{'so\'ngida g\'olib bo\'ling'}!
                  </h3>
                </div>
              </div>
            </section>
          </div>
          <div className="w-full flex-shrink-0">
            <section className="flex h-full bg-[#222222] md:px-[6rem] px-[1rem] py-[3rem]  ">
              <div className="mt-40 sm:flex ">

              </div>
            </section>
          </div>
        </div>


    </div>
  )
}

const TriangleIcons = (color) => {
  if (color === 'green') {
    return (
      <Image
        alt={'icon'}
        width={15}
        height={10}
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACP0lEQVR4nO2YPWgUYRCGR715d785QwgBEQQLwUYQLGwsVEijXqGd1tpqpdam1ZRa+dOoO3OwjWIhNoKFhQo2ghB/QLAQQRARiZ7kRy65u0iSY/fudvfbwD4w7fI8+83dsktUUVFRsRGh1o4645n2hFHtCG0mnPGMGJb+H2d8lTYDomisle+NokGlJiY449m+AcYf6DEFVFakicv95VembrhEZaR+r77DKX4kBTjDT4llJ5UNZ7idJN+LUNyiMiERHxDFfNoAMSw4qx2ksiCGZwPId+c5LdEW3+4UNvnMEPLLExqf9msfkxPlT8MGiPJnekTizV8M00PLrz7crniRd7HbJYZfGQTMhXG4u/gAhY4sb71nQ1SofKi1Q6JYzCpAFIths3a4GPtp2iqGl5nJW+cUFK/b187dX4zPZS0vq/9KZ3OVn7xDY874S14BTvnrREzjuQU45Wu53X3L+cUn0GCPKP7kHSCKFhR7Mw8Q44e5y1t3+EGm8nULpoqTR+ckgmPZ2Me0zRneFB3gjN/STeKR/Z0GFwq/+9aNCM6PJD+uNOEM3/wF4PvYXZocOkCMb/iSl95vga8PJb/9PvaJ4a//AMzXI94/cIAzfuJd3jqrpPx0MPkIp3xLy9oIw8l09jFBlN/5FpZ1q8QfU33VCxUXvcvaxtN2SwwQ4/e+RaXvGvFsigD89i0qfdcIc8kBilclDniRHNDEifanP++ytm4WxILjiQGdU2gsn4Si5V1c0VrZipTyFRUVFRU0AP8AKFrgQmnzr6MAAAAASUVORK5CYII=" />
    )
  } else if (color === 'red') {
    return (
      <Image
        alt={'icon'}

        width={15}
        height={10}
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA80lEQVR4nO3UPy5EURiG8Z+ESlSSiUSjsAWFVmgosILZBrtgDVNRKSbuOUMyGzAKG5jkJhQiohAVrkgUV3DduXOKKeZJvvZ9zvcnhykTQWQ/kkeKRJUH9sqCu4ThxWcFbsuCQWpBZFAWbATeUwoydr7tIdBJOJ7Oj0VfsBi5TxD+EGn9dU3tBB20/zvZ3hjh/YKZSkHGSuC5wWheAquV4aUuDhsIDtSlz2zgeoTwmyvmjMI5a5HXGoK3jHVNCBzXeP2RpkTmI8MKQX7GgnHosV3xHexKQeD0F8GJVHRZijyW5v50ybKUBLa+9jHM2EwaPtF8AIXjq8aSESYvAAAAAElFTkSuQmCC" />
    )
  } else {
    return (
      <Image
        alt={'icon'}

        width={20}
        height={15}
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA/UlEQVR4nN2UTQ4BQRCFJ4TrEbzXuu3nGrP1dwvCkYzfOwh7UkKQaTOjlQWV1KZTqa9fV/WLor8OAHUHGEfOLJla4HhJMpWzLkCpCWpuybYjt4485Sawcca03rl11QLjwsZ8TkuOkiSpFN88oLm7QYBBmWcJau7uSpp5A90oAHbewV+35aSSxsAHmKsBgGkWQK60AJZMfYCDmgLy8FWABfa+GSwVFSx8CmaKgEkGIMalBegBnQwgjuOaJdcKgO1LhxVX/BhgTCPKC3HFDwD9qCjEch05DFjNQSm7flDSLDOTS03Rs7wKGbwYl3iL7Pb1M0ou5Ey2RWqCmv9MnAGuqJjFmbBezQAAAABJRU5ErkJggg==" />
    )
  }
}
export default Competetive